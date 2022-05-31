// import '../styles/style.css'
import { globalStyles, styled } from '../stitches.config'
import Nav from '../components/navigation/Nav'

const Container = styled('div', {
  display: 'flex',
  maxWidth: '1920px',
  justifyContent: "center",
  marginX: 'auto',
})

function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <>
      <Nav />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
