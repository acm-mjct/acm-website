import React from 'react'
import { ArrowRightIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
const Main3 = () => {
  return (
    <div>
    <div className='overflow-hidden'>
        <h1 className='text-yellow-700 text-2xl lg:text-3xl font-bold text-center my-3'>Meet Our Execom</h1>
      <div className='container mx-auto flex flex-col justify-center border-2 border-black border-opacity-0 lg:border-opacity-60 w-4/5 lg:w-3/4 mb-10 rounded-xl '>
        
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-y-8 mt-7'>
        <div className='container mx-auto flex flex-col justify-center items-center max-w-xs h-80 bg-inherit cursor-pointer border-yellow-600 border-2 border-opacity-100 lg:border-opacity-20 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container mx-auto flex flex-col justify-center items-center max-w-xs h-80 bg-inherit cursor-pointer border-yellow-600 border-2  border-opacity-100 lg:border-opacity-20 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
           
        </div> 
        <Link href='Execom'>
        <div className='flex  items-center justify-center  group overflow-hidden cursor-pointer'>
        <h2 className='text-center mb-2 mt-3 text-yellow-700 font-extrabold group-hover:text-navy'>Show More 
        </h2><ArrowRightCircleIcon className='h-6 w-10 mt-1 text-yellow-700 group-hover:text-navy font-bold '/>
        </div>
        </Link>
      </div>
    </div>
    <h1 className='text-yellow-700 text-2xl lg:text-3xl font-bold text-center my-3'>Spotlight</h1>
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center border-2 border-black border-opacity-0 lg:border-opacity-60 w-4/5 lg:w-3/4 mb-10 rounded-xl '>
      <div className='  mx-5 my-3 p-3 flex items-center rounded-md border-yellow-600 border-2  border-opacity-100 lg:border-opacity-20  shadow-lg overflow-hidden'>
        <Image  width={130} height={180} src="/media/j.png" className='rounded-md'/>
      </div>
      <div className=' h-4 bg-red-600 mx-5 my-3'></div>
      <div className=' h-4 bg-red-600 mx-5 my-3'></div>
      <div className=' h-4 bg-red-600 mx-5 my-3'></div>
    </div>
    </div>
  )
}

export default Main3
