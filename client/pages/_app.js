import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../src/index.css'
import React ,{ useState } from 'react'

function MyApp({ Component, pageProps }) {

  return(
    <>
   
     <Component {...pageProps} />
     {/* <Footer />  */}
     </>
     )
}

export default MyApp
