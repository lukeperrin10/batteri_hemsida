// import '../styles/style.css'
import { globalStyles } from '../stitches.config'
import Nav from '../components/navigation/Nav'

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
