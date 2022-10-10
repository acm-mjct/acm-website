import React from 'react'
import Image from 'next/image'
// import Slider from "image-slider";
// import "@madzadev/image-slider/dist/index.css";

const Main1 = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
  // ];
  return (
    <div>
      {/* <div className=' container mx-auto flex-wrap  inline-flex'>
        <div className='container overflow-hidden motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg rotate-45'>
          <div className='h-8 w-8 mx-auto mt-8  bg-gradient-to-tl from-indigo-600 to-navy rounded-lg rotate-45'></div>
        </div>
        <div className='flex h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg rotate-45'>
          <div className=' h-8 w-8 mx-auto mt-8 bg-gradient-to-tl from-indigo-600 to-navy rounded-lg rotate-45'>

          </div>
        </div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg rotate-45'></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg rotate-45'></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg sm:visible rotate-45 '></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg sm:visible  rotate-45'></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg sm:visible  rotate-45'></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg sm:visible rotate-45 '></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg sm:visible rotate-45 '></div>
        <div className='motion-safe:animate h-8 w-8 mx-auto mt-8 motion-safe:animate-ping bg-gradient-to-tl from-indigo-600 to-navy rounded-lg sm:visible rotate-45 '></div>
      </div> */}
      <div className='container mx-auto w-60 h-20 md:w-96 md:h-60 flex justify-center'>
      <video src="/vid6.mp4" autoPlay loop muted className="bg-inherit"></video>
      </div>
      {/* <h1 className='text-center   text-5xl text-black  font-lato '>We Are ACM</h1> */}
      <div className='motion-safe:animate relative mx-auto mt-5 w-4/5 bg-navy h-96 mb-4 rounded-xl overflow-hidden'>
        <div>

          {/* <Image src='/media/1.jpeg' width={200} height={180} className="opacity-30 hover:opacity-75 cursor-pointer hover:scale-150 animate-ping" />
          <Image src='/media/3.jpeg' width={250} height={180} className="opacity-30" /> */}
          <video src="/project.mp4" autoPlay loop muted className="bg-inherit overflow-hidden h-full"></video>

        </div>
        

      </div>
  
    </div>
    // <div>
    //   <div>

    //   <Slider
    //     slides={images}
    //     size="medium"
    //     slideInterval={6}
    //     inmotion-safe:animate
    //     className="mt-20 mb-20"
    //   />
    //   <Slider slides={images} size="large" slideInterval={6} />
    // </div>
    // </div>

  )
}

export default Main1
