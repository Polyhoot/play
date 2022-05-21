import { Box } from 'grommet/components/Box'
import { Page } from 'grommet/components/Page'
import { Spinner } from 'grommet/components/Spinner'
import Head from 'next/head'

const Preloader = (props: { color: string; background: string }) => {
  return (
    <Page height={'100%'} background={props.background}>
      <Head>
        <meta name="theme-color" content={props.background} />
      </Head>
      <Box margin={'auto'}>
        <Spinner size={'large'} color={props.color} />
      </Box>
    </Page>
  )
}

export default Preloader
