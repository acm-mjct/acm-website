import React from 'react'
import Image from 'next/image'


const wdbt = () => {
  return (
    <div>
        <div className='container mx-auto flex flex-col justify-center items-center w-3/4 mt-6 font-bold cursor-pointer'>
            <h1 className='text-center text-2xl md:text-4xl text-yellow-500 mb-3 '>Web Development BootCamp</h1>
            <h2 className='text-right text-md md:text-lg text-navy  mb-7'>28th February & 1st March 2021</h2>
            <div className='min-h-screen rounded-lg'>
               <img src="/media/oney.png" alt="" className='rounded-lg' />
            </div>
            <div className='container mx-auto md:w-2/3 mt-5'>
                <p>
                Web Development Bootcamp was a two day hands on event, platformed online through Google meet. Over 100 participants across MJCET took part in learning Web development through ACM. </p><p>
<span className='text-yellow-500 text-lg md:text-xl'>
HTML (HyperText Markup Language):</span> is the most basic building block of the Web. It defines the meaning and structure of web content.
<p><span className='text-yellow-500 text-lg md:text-xl'> CSS (Cascading Style Sheets</span> is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. Both Languages play a major role in Web development. Therefore ACM took up these topics as the base for the WEB BOOTCAMP.</p>
The event consisted of teaching the beginner levels of HTML and CSS by the ACM MJCET excecom, followed by firsthand operations and implementation of those teachings into building a self profile by individual participants. All profiles were closely monitored and sought out by the ACM team to help out the participants into creating a well structured web page. 
<p>Registration Fee: Free</p>
<p>No. of participants: 120 </p>


                </p>
            </div>
        </div>
    </div>
  )
}

export default wdbt