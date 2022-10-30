import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Main1 from '../components/Main1'
import Main2 from '../components/Main2'
import Main3 from '../components/Main3'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
     
      <Main1/>
      <Main2 />
      {/* <Footer/> */}
      <Main3 />
      <Footer/>
    </div>
  )
}
