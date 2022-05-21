import { useStore } from '@nanostores/react'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import Head from 'next/head'
import { gameStore } from '../../store/game'
import { loginStore } from '../../store/login'
import { questionStore } from '../../store/question'
import { timerStore } from '../../store/timer'

const GameHeader: React.FC = () => {
  const question = useStore(questionStore)
  const timer = useStore(timerStore)
  return (
    <Box
      background={'light-1'}
      elevation={'medium'}
      margin={'0 auto'}
      height={'5%'}
      width={'100%'}
      direction={'row'}
    >
      <Head>
        <meta name="theme-color" content="#F8F8F8" />
      </Head>
      <Text margin={'auto auto auto 40px'} weight={'bolder'}>
        {question.text}
      </Text>
      <Text margin={'auto 40px auto auto'} weight={'bolder'}>
        {Math.floor(timer / 60) + ':' + (timer % 60 ? timer % 60 : '00')}
      </Text>
    </Box>
  )
}

export default GameHeader
