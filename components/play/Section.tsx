import { useStore } from '@nanostores/react'
import { Spinner } from 'grommet'
import { Box } from 'grommet/components/Box'
import { Text } from 'grommet/components/Text'
import Head from 'next/head'
import { loginStore } from '../../store/login'

const Section: React.FC<{ text: string; spinner: boolean }> = (props: {
  text: string
  spinner: boolean
}) => {
  return (
    <Box margin={'auto'}>
      <Head>
        <meta name="theme-color" content="#3D138D" />
      </Head>
      <Text weight={'bold'} size={'xxlarge'} margin={'20px auto'}>
        {props.text}
      </Text>
      {props.spinner ? (
        <Spinner size={'large'} color={'white'} margin={'20px auto'} />
      ) : null}
    </Box>
  )
}

export default Section
