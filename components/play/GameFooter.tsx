import { useStore } from '@nanostores/react'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import { loginStore } from '../../store/login'

const GameFooter: React.FC = () => {
  const { gameId, name } = useStore(loginStore)
  return (
    <Box
      background={'light-1'}
      elevation={'medium'}
      margin={'0 auto'}
      height={'5%'}
      width={'100%'}
      direction={'row'}
    >
      <Text margin={'auto auto auto 40px'} weight={'bolder'}>
        {name}
      </Text>
      <Text margin={'auto 40px auto auto'} weight={'bolder'}>
        PIN: {gameId}
      </Text>
    </Box>
  )
}

export default GameFooter
