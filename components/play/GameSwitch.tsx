import { useStore } from '@nanostores/react'
import { gameStore } from '../../store/game'
import Lobby from './Lobby'

const GameSwitch: React.FC = () => {
  const { state } = useStore(gameStore)
  switch (state) {
    case 'LOBBY':
      return <Lobby />
  }
  return <></>
}

export default GameSwitch
