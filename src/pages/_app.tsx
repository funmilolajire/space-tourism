import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { AppWrapper } from '../contexts/context'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyApp
