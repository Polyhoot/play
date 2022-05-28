import { useStore } from '@nanostores/react'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import Head from 'next/head'
import { loginStore } from '../../store/login'

const Lobby: React.FC = () => {
  const { gameId, name } = useStore(loginStore)
  return (
    <Box margin={'auto'}>
      <Head>
        <meta name="theme-color" content="#3D138D" />
      </Head>
      <Text weight={'bold'} size={'xxlarge'} margin={'20px auto'}>
        You are joined!
      </Text>
      <Text margin={'auto'}>See your name on screen?</Text>
    </Box>
  )
}

export default Lobby
