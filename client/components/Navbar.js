import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container top-0 absolute flex justify-center  mt-0'>
      <video src='/project.mp4' autoPlay muted loop playsInline className=''>

      </video>
      <nav className=' flex justify-center  absolute top-0  items-center'>
        <img
          className="block h-16 w-auto "
          src="/acmdarklogo.png"
          alt="Your Company" />
        <ul>
          <li className='list-none inline-block ml-12 font-bold text-white cursor-pointer'><Link className='cursor-pointer' href="/">Home</Link></li>
          <li className='list-none inline-block ml-12 font-bold text-white cursor-pointer'><Link href="/about">About Us</Link></li>
          <li className='list-none inline-block ml-12 font-bold text-white cursor-pointer'><Link href="/events">Events</Link></li>
                           <li className='list-none inline-block ml-12 font-bold text-white cursor-pointer'><Link href="/components/Footer.js">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
