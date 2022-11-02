import React from 'react'
import Image from 'next/image'


const Main1 = () => {

  return (
    <div>
     
      
      <div className='motion-safe:animate relative mx-auto object-contain    mb-4  overflow-hidden'>
        <div className='h-24 flex flex-col lg:flex-row items-center justify-center  bg-navy'>
        
              <h1 className='text-wheaty text-center pb-4 lg:pb-0 px-0 lg:px-11   text-xl md:text-2xl font-bold'>Register here for Hello World</h1>
              <button
                    type="button"
                    className="rounded-xl bg-yellow-500 p-2 text-navy hover:text-navy hover:bg-wheaty mr-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">registration</span>
                    <p className='font-bold'>Register Here</p>
                  </button>
                 
        </div>
        <div>

         
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
