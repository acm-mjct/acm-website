import React from 'react'

const Main2 = () => {
  return (
    <>
      <div className='my-10 container mx-auto w-4/5 md:w:2/3 flex flex-col items-center justify-center cursor-pointer bg-inherit'>
        <h1 className=' text-4xl font-bold text-navy mb-8'>
          We Are ACM
        </h1>

        <div className='h-32 w-32 bg-inherit rounded-full mr-40 -mb-20 z-20 overflow-hidden '>
          <img src="/media/imgsss.png" alt="" className=" max-w-md h-44 mb-5" />
        </div>
        <div className='h-24 w-24 bg-inherit rounded-full ml-52 -mb-20 z-40 overflow-hidden'>
          <img src="/media/imgaa.png" alt="" className=" max-w-md h-36 mb-5" />
        </div>
        <div className='overflow-hidden flex justify-center items-center bg-inherit w-60 h-60 rounded-full  '>
          <img src="/media/full.png" alt="" className=" max-w-md h-60 z-30" />
        </div>
        <div className='h-32 w-32 bg-inherit rounded-full ml-52 -mt-14 overflow-hidden '>
          <img src="/media/10.png" alt="" className=" max-w-md h-32" />
        </div>
        <div className='h-40 w-40 bg-inherit rounded-full -ml-96 overflow-hidden -mt-60 z-40 invisible md:visible'>
          <img src="/media/4.jpeg" alt="" className=" max-w-md h-60" />
        </div>
        <div className='h-28 w-28 bg-inherit rounded-full mr-44 overflow-hidden z-40 '>
          <img src="/media/IMG_1788.png" alt="" className=" max-w-md h-44" />
        </div>

        <p className='mt-7  md:px-44 text-center font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus praesentium, dicta libero at, vero autem amet a aliquam fuga impedit ullam itaque dolorum vitae magnam adipisci saepe tempora blanditiis modi, rem doloribus.</p>
      </div>
      <h1 className='mt-7 md:mt-11 mb-4 md:mb-7 text-2xl md:text-4xl text-navy lg:font-bold text-center '>Connect With Us On Social Media</h1>
      <div className='container mx-auto w-fit'>


        <span className=" inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
          <a className="text-black hover:text-yellow-500 hover:scale-125" href='https://www.facebook.com/acmmjcet'>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 mt-2 text-black hover:text-yellow-500 hover:scale-125" href='https://youtube.com/channel/UC_IVqCOEFDHOUxpkrfF9Utg'>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-11 h-12" viewBox="0 0 24 24">
              {/* <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path> */}
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
            </svg>
          </a>
          <a className="ml-2 text-black hover:text-yellow-500 hover:scale-125" href='https://mobile.twitter.com/AcmMjcet'>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>

            </svg>
          </a>
          <a className="ml-3 text-black hover:text-yellow-500 hover:scale-125" href='https://instagram.com/mjcet_acm?igshid=YmMyMTA2M2Y='>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-black hover:text-yellow-500 hover:scale-125" href='https://www.linkedin.com/company/acmmjcet/'>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-10 h-10" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
      {/* <div className=''>
      <h1 className='text-center'>Latest From ACM</h1>
      <div className='container mx-auto md:w-4/5 flex flex-col md:flex-row justify-between '>
        <div className='container mx-auto md:mx-3 w-3/4  my-3  h-40  bg-green-400 rounded-md'></div>
        <div className='container mx-auto md:mx-3 w-3/4 my-3 h-40 bg-green-400 rounded-md'></div>
      </div>
      <div className='container mx-auto md:w-4/5 flex flex-col md:flex-row justify-between '>
        <div className='container mx-auto md:mx-3 w-3/4  my-3  h-40  bg-green-400 rounded-md'></div>
        <div className='container mx-auto md:mx-3 w-3/4 my-3 h-40 bg-green-400 rounded-md'></div>
      </div>
      <div className='container mx-auto md:w-4/5 flex flex-col md:flex-row justify-between '>
        <div className='container mx-auto md:mx-3 w-3/4  my-3  h-40  bg-green-400 rounded-md'></div>
        <div className='container mx-auto md:mx-3 w-3/4 my-3 h-40 bg-green-400 rounded-md'></div>
      </div>
    </div> */}
    </>
  )
}

export default Main2
