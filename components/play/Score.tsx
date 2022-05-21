import { useStore } from '@nanostores/react'
import { Spinner } from 'grommet'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import { loginStore } from '../../store/login'
import { gameStore } from '../../store/game'
import GameHeader from './GameHeader'
import { Checkmark, Close } from 'grommet-icons'

const correct = [
  'You were right!',
  'Yeah! You rock!',
  'Woow! Great job!',
  'Yay! Correct!',
]

const wrong = [
  'Better luck next time...',
  'Do better next time!',
  'Ooops. You were wrong :(',
  'Incorrect..',
]

const Score: React.FC = () => {
  const game = useStore(gameStore)
  return (
    <Box margin={'auto'} height={'95%'} width={'100%'}>
      <GameHeader />
      <Box margin={'auto'}>
        <Text weight={'bold'} size={'xxlarge'} margin={'20px auto'}>
          {game.isLastCorrect
            ? correct[Math.floor(Math.random() * correct.length)]
            : wrong[Math.floor(Math.random() * wrong.length)]}
        </Text>
        <Box margin={'30px auto'}>
          {game.isLastCorrect ? (
            <Checkmark size="large" />
          ) : (
            <Close size="large" />
          )}
        </Box>
        <Box pad={'10px 40px'} background={'rgba(0,0,0,0.2)'}>
          <Text weight={'bold'} size={'xxlarge'}>
            Your score: {game.score}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Score
