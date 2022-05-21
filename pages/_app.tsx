import { Grommet } from 'grommet'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet
      plain
      style={{
        height: '100%',
      }}
    >
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp
