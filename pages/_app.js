import '../styles/style.css'
import Nav from '../components/navigation/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div className='layout'>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
