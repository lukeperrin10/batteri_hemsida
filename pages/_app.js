// import '../styles/style.css'
import { globalStyles, styled } from '../stitches.config'
import Nav from '../components/navigation/Nav'
import Footer from '../components/Footer'

const Container = styled('div', {
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
})

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Nav />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
