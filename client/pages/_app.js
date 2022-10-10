import Navbar from '../components/Navbar'
import '../src/index.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar />
     <Component {...pageProps} />
     </>
     )
}

export default MyApp
