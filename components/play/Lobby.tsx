import { useStore } from '@nanostores/react'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import { loginStore } from '../../store/login'

const Lobby: React.FC = () => {
  const { gameId, name } = useStore(loginStore)
  return (
    <Box margin={'auto'}>
      <Text weight={'bold'} size={'xxlarge'} margin={'20px auto'}>
        You are joined!
      </Text>
      <Text margin={'auto'}>See your name on screen?</Text>
    </Box>
  )
}

export default Lobby
