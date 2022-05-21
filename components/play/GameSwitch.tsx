import { useStore } from '@nanostores/react'
import { gameStore } from '../../store/game'
import Lobby from './Lobby'
import Section from './Section'

const GameSwitch: React.FC = () => {
  const { state } = useStore(gameStore)
  switch (state) {
    case 'LOBBY':
      return <Lobby />
    case 'STARTING':
      return <Section text="Starting the game!" />
    case 'GET_READY':
      return <Section text="Get ready to answer!" />
  }
  return <></>
}

export default GameSwitch
