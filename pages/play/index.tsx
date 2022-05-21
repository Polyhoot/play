import { useStore } from '@nanostores/react'
import { Box, Page, Text } from 'grommet'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { gameStore } from '../../store/game'
import { loginStore } from '../../store/login'
import { serverIp } from '../../utils/getServerIp'
import { isBrowser } from '../../utils/isBrowser'
import GameSwitch from '../../components/play/GameSwitch'
import GameFooter from '../../components/play/GameFooter'

const PlayPage: NextPage = () => {
  const router = useRouter()

  const login = useStore(loginStore)
  const game = useStore(gameStore)

  const socket = useMemo(
    () => (isBrowser ? new WebSocket(`wss://${serverIp}/game/session`) : null),
    []
  )

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
      })
    }
  }, [login, socket])

  useEffect(() => {
    if (socket && login.gameId && login.name)
      socket.addEventListener('open', socketListener)
  }, [login.gameId, login.name, socket, socketListener])
  return (
    <Page height={'100%'} background={'neutral-2'}>
      <GameSwitch />
      <GameFooter />
    </Page>
  )
}

export default PlayPage
