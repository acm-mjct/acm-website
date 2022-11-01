import React from 'react'
import { ArrowRightIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
const Main3 = () => {
  return (
    <div>
      <div className='overflow-hidden'>
        <h1 className='text-yellow-500 text-2xl lg:text-3xl font-bold text-center my-3'>Meet Our Execom</h1>
        <div className='container mx-auto flex flex-col justify-center w-4/5  mb-10 rounded-xl '>

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-y-8 mt-7'>
            <div className='container mx-auto flex flex-col justify-center items-center w-72 h-72 lg:mt-11 bg-inherit cursor-pointer border-yellow-500 border-2 border-opacity-100 lg:border-opacity-20 hover:border-opacity-100 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
              <div className=' w-48 h-54 rounded-full overflow-hidden '>
                <img src='/profs/has.png' className='' />

              </div>
              <h1 className='text-2xl font-bold  mt-4 text-navy'>Haseeb Khan</h1>
            <h2 className='font-bold text-yellow-500'>Vice Chair</h2>
            </div>
            <div className='container mx-auto flex flex-col justify-center items-center w-72 lg:w-80 h-72 lg:h-80 bg-inherit cursor-pointer border-yellow-500 border-2  border-opacity-100 lg:border-opacity-20  hover:border-opacity-100 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/profs/madiha1.png' className='' />

              </div>
              <h1 className='text-2xl font-bold  mt-4 text-navy'>Madiha Siddique</h1>
            <h2 className='font-bold text-yellow-500'>Chair</h2>
            </div>
            <div className='container mx-auto flex flex-col justify-center items-center w-72 h-72 lg:mt-11 bg-inherit cursor-pointer border-yellow-500 border-2 border-opacity-100 lg:border-opacity-20 hover:border-opacity-100 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
              <div className=' w-48 h-44 rounded-full overflow-hidden '>
                <img src='/profs/rafe.png' className='' />

              </div>
              <h1 className='text-2xl font-bold  mt-4 text-navy'>Rafey Ahmed</h1>
              <h2 className='font-bold text-yellow-500'>Advisor</h2>
            </div>

          </div>
          <Link href='Execom'>
            <div className='flex  items-center justify-center  group overflow-hidden cursor-pointer'>
              <h2 className='text-center mb-2 mt-3 text-yellow-500 font-extrabold group-hover:text-navy'>Show More
              </h2><ArrowRightCircleIcon className='h-6 w-10 mt-1 text-yellow-500 group-hover:text-navy font-bold ' />
            </div>
          </Link>
        </div>
      </div>
      {/* <div>
      <h1 className='text-yellow-500 text-2xl lg:text-3xl font-bold text-center my-3'>Latest from ACM</h1>
      <div className='container mx-auto flex flex-col justify-center w-full  bg-black  mb-10 '>
          <img src='/media/circuit.jpg' className='w-full h-full object-cover opacity-40' />
      </div>
      </div> */}
      <h1 className='text-yellow-500 text-2xl lg:text-3xl font-bold text-center my-3'>Spotlight</h1>
      <div className='container mx-auto grid grid-cols-1    md:w-3/4 lg:w-2/3 mb-10 rounded-xl '>
        <Link href="">
        <div className='  mx-5 my-3 p-3 flex items-center rounded-md border-yellow-500  hover:shadow-2xl overflow-hidden cursor-pointer'>
         
          <div className='container mx-auto flex flex-col w-2/3 justify-center'>
          <h1 className='text-center text-navy font-bold text-2xl mb-4'>Mystery Grounds</h1>
          <div>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque a, nam quod quaerat minima ab </p>
          </div>
          </div>
          <Image width={130} height={180} src="/media/j.png" className='rounded-md ' />
        </div>
        </Link>
        <Link href="">
        <div className='  mx-5 my-3 p-3 flex items-center rounded-md border-yellow-500  hover:shadow-2xl overflow-hidden cursor-pointer'>
        <div className='container mx-auto flex flex-col w-2/3 justify-center'>
          <h1 className='text-center text-navy font-bold text-lg md:text-2xl mb-4'>GitHub and get started with Opensource</h1>
        <div>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque a, nam quod quaerat minima </p>
          </div>
          </div>
          <Image width={130} height={180} src="/media/ops.jpeg" className='rounded-md' />
        </div>
        </Link>
        <Link href="">
        <div className='  mx-5 my-3 p-3 flex items-center rounded-md border-yellow-500  hover:shadow-2xl overflow-hidden cursor-pointer'>
         
          <div className='container mx-auto flex flex-col w-2/3 justify-center'>
          <h1 className='text-center text-navy font-bold text-2xl mb-4'>Mystery Grounds</h1>
          <div>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque a, nam quod quaerat minima ab </p>
          </div>
          </div>
          <Image width={130} height={180} src="/media/j.png" className='rounded-md ' />
        </div>
        </Link>
        <Link href="">
        <div className='  mx-5 my-3 p-3 flex items-center rounded-md border-yellow-500  hover:shadow-2xl overflow-hidden cursor-pointer'>
         
          <div className='container mx-auto flex flex-col w-2/3 justify-center'>
          <h1 className='text-center text-navy font-bold text-2xl mb-4'>Mystery Grounds</h1>
          <div>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque a, nam quod quaerat minima ab </p>
          </div>
          </div>
          <Image width={130} height={180} src="/media/j.png" className='rounded-md ' />
        </div>
        </Link>
      </div>
      <div className='h-24 flex flex-col lg:flex-row items-center justify-center  bg-yellow-500'>
        
        <h1 className='text-navy text-center pb-4 lg:pb-0 px-0 lg:px-11   text-xl md:text-2xl font-bold'>Want to Upskill and stay Updated?</h1>
        <button
              type="button"
              className="rounded-xl bg-navy p-2 text-wheaty hover:text-navy hover:bg-wheaty mr-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">registration</span>
              <p className='hover:font-semibold'>Subscribe to newsletter</p>
            </button>
           
  </div>
    </div>
  )
}

export default Main3
