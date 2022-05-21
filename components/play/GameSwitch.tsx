import { useStore } from '@nanostores/react'
import { gameStore } from '../../store/game'
import Lobby from './Lobby'
import Question from './Question'
import Section from './Section'
import Score from './Score'

const GameSwitch: React.FC = () => {
  const { state } = useStore(gameStore)
  switch (state) {
    case 'LOBBY':
      return <Lobby />
    case 'STARTING':
      return <Section text="Starting the game!" spinner />
    case 'GET_READY':
      return <Section text="Get ready to answer!" spinner />
    case 'QUESTION':
      return <Question />
    case 'SCORE':
      return <Score />
    case 'END':
      return <Section text="The game was ended!" spinner={false} />
  }
  return <></>
}

export default GameSwitch
