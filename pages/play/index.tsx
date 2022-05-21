import { useStore } from '@nanostores/react'
import { Box, Page, Text } from 'grommet'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gameStore, updateState } from '../../store/game'
import { loginStore } from '../../store/login'
import { serverIp } from '../../utils/getServerIp'
import { isBrowser } from '../../utils/isBrowser'
import GameSwitch from '../../components/play/GameSwitch'
import GameFooter from '../../components/play/GameFooter'
import Preloader from '../../components/Preloader'
import { toast } from 'react-toastify'
import Head from 'next/head'

const PlayPage: NextPage = () => {
  const router = useRouter()

  const login = useStore(loginStore)
  const game = useStore(gameStore)

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
      })
    }
  }, [login, socket])

  useEffect(() => {
    if (socket && login.gameId && login.name)
      socket.addEventListener('open', socketListener)
    else if (!login.gameId) {
      router.push('/')
    }
  }, [login.gameId, login.name, socket, socketListener])

  if (loading) {
    return <Preloader color={'white'} background={'#3D138D'} />
  }

  return (
    <Page height={'100%'} background={'neutral-2'}>
      <Head>
        <meta name="theme-color" content="#3D138D" />
      </Head>
      <GameSwitch />
      <GameFooter />
    </Page>
  )
}

export default PlayPage
