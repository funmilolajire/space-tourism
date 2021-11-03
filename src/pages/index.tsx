import type { NextPage } from 'next'
import Main from '../components/Home/Main'
import Meta from '../components/Meta/Meta'

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" description="" />
      <Main />
    </>
  )
}

export default Home
