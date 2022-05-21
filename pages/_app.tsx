import { Grommet } from 'grommet'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'
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
      <ToastContainer position="bottom-right" autoClose={3000} closeOnClick />
    </Grommet>
  )
}

export default MyApp
