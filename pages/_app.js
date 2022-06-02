// import '../styles/style.css'
import { globalStyles, styled } from '../stitches.config'
import DesktopNav from '../components/navigation/Nav'

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
      <DesktopNav />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
