import { useStore } from '@nanostores/react'
import { Radial, Square, Trigger, Sun } from 'grommet-icons'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import { loginStore } from '../../store/login'

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
  return (
    <Box margin={'auto'}>
      <Box></Box>
      <Text margin={'auto'}>See your name on screen?</Text>
    </Box>
  )
}

export default Question
