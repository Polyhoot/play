import { useStore } from '@nanostores/react'
import { Page } from 'grommet'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { clearGameStore, gameStore, updateScore, updateState } from '../../store/game'
import { clearLoginStore, loginStore } from '../../store/login'
import { serverIp } from '../../utils/getServerIp'
import { isBrowser } from '../../utils/isBrowser'
import GameSwitch from '../../components/play/GameSwitch'
import GameFooter from '../../components/play/GameFooter'
import Preloader from '../../components/Preloader'
import { toast } from 'react-toastify'
import { clearQuestionStore, nextQuestion, setSocket } from '../../store/question'
import { clearTimerStore } from '../../store/timer'

const PlayPage: NextPage = () => {
  const router = useRouter()

  const login = useStore(loginStore)

  const socket = useMemo(
    () => (isBrowser ? new WebSocket(`wss://${serverIp}/game/session`) : null),
    []
  )

  const [loading, setLoading] = useState(true)

  const socketListener = useCallback(() => {
    if (socket) {
      socket.send(
        JSON.stringify({
          event: 'connect',
          gameId: login.gameId,
          name: login.name,
        })
      )
      setSocket(socket)
      socket.addEventListener('message', (ev) => {
        const data = JSON.parse(ev.data)
        if (data.event === 'NAME_TAKEN') {
          toast.error('Name is already taken')
          router.push('/')
        }
        if (data.event === 'NO_SUCH_GAME') {
          toast.error('Incorrect Game Pin')
          router.replace('/')
        }
        if (data.event === 'CONNECT') {
          setLoading(false)
        }
        if (data.event === 'START_GAME') {
          updateState('STARTING')
        }
        if (data.event === 'GET_READY') {
          updateState('GET_READY')
        }
        if (data.event === 'QUESTION') {
          nextQuestion(data.duration, data.text)
        }
        if (data.event === 'TIME_UP') {
          updateScore(data.score)
        }
        if (data.event === 'END') {
          updateState('END')
        }
      })
    }
  }, [login.gameId, login.name, router, socket])

  useEffect(() => {
    if (socket && login.gameId && login.name)
      socket.addEventListener('open', socketListener)
    else if (!login.gameId) {
      router.push('/')
    }
  }, [login.gameId, login.name, router, socket, socketListener])

  useEffect(() => {
    router.beforePopState(({ as }) => {
        if (as !== router.asPath) {
          clearQuestionStore()
          clearTimerStore()
          clearLoginStore()
          clearGameStore()
        }
        return true;
    });

    return () => {
        router.beforePopState(() => true);
    };
  }, [router]);


  if (loading) {
    return <Preloader color={'white'} background={'#3D138D'} />
  }

  return (
    <Page height={'100%'} background={'neutral-2'}>
      <GameSwitch />
      <GameFooter />
    </Page>
  )
}

export default PlayPage
