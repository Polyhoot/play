import { useStore } from '@nanostores/react'
import { Radial, Square, Trigger, Sun } from 'grommet-icons'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import { useCallback, useEffect, useState } from 'react'
import { gameStore, updateState } from '../../store/game'
import { loginStore } from '../../store/login'
import { questionStore } from '../../store/question'
import { resetTimer, updateTimer } from '../../store/timer'
import GameHeader from './GameHeader'
import '../../styles/Question.module.scss'

const styles = [
  {
    icon: <Radial color={'white'} fill={'white'} style={{ margin: 'auto' }} />,
    color: '#3D138D',
  },
  {
    icon: <Square color={'white'} fill={'white'} style={{ margin: 'auto' }} />,
    color: '#FFCA58',
  },
  {
    icon: <Trigger color={'white'} fill={'white'} style={{ margin: 'auto' }} />,
    color: '#00739D',
  },
  {
    icon: <Sun color={'white'} fill={'white'} style={{ margin: 'auto' }} />,
    color: '#00C781',
  },
]

const Question: React.FC = () => {
  const question = useStore(questionStore)
  useEffect(() => {
    resetTimer(question.duration)
    const interval = setInterval(() => updateTimer(), 1000)
    return () => clearInterval(interval)
  }, [question.duration])

  const [startTime, _] = useState(Date.now())

  const answer = useCallback(
    (i: number) => {
      question.socket?.send(
        JSON.stringify({
          event: 'answer',
          answer: i,
          score:
            1000 - Math.round((Date.now() - startTime) / question.duration),
        })
      )
      updateState('WAITING')
    },
    [question.socket, question.duration, startTime]
  )

  return (
    <Box margin={'auto'} height={'95%'} width={'100%'}>
      <GameHeader />
      <Box
        height={'95%'}
        background={'light-3'}
        direction={'row'}
        wrap
        width={'100%'}
        elevation={'middle'}
      >
        {styles.map((s, i) => (
          <Box
            key={s.color}
            height={'45%'}
            width={'45%'}
            margin={'auto'}
            background={s.color}
            onClick={() => answer(i)}
            className={'answer'}
          >
            <Box margin={'auto'}>{s.icon}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Question
