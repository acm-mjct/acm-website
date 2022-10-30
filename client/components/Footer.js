import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="text-gray-900 bg-navy body-font">
        <form action="">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Interact
                  With ACM</h2>

                <label for="fname" className='text-wheaty '>Name:</label><br />
                <input type="text" id="footer-field" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out required" /><br />
                <label for="lname" className='text-wheaty'>College ID</label><br />
                <input type="tel" placeholder="1604-20-733-105" id="footer-field" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out required" /><br />
                <label for="email" className='text-wheaty'>Email ID:</label><br />
                {/* <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div> */}
                <input type="email" id="footer-field" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out required" /><br />

              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full    md:mt-5">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
                <label for="name" className='text-wheaty'>Branch:</label><br />
                <input type="text" id="footer-field" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out required" /><br />
                <label for="name" className='text-wheaty'>Year:</label><br />
                <input type="name" id="footer-field" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out required" /><br />
                <label for="number" className='text-wheaty'>Mobile No:</label><br />
                <input type="tel" id="footer-field" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-3 leading-8 transition-colors duration-200 ease-in-out required" /><br />


              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full   md:mt-5">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
                <label for="large-input" className='text-wheaty'>Your Query</label><br />
                <input type="text"  id="large-input" name="footer-field" className=" bg-gray-800 bg-opacity-40 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100  px-10 py-4 leading-8 transition-colors duration-200 ease-in-out required" /><br />
               <button className="inline-flex text-black bg-yellow-600 border-0 py-1 px-6 focus:outline-none hover:bg-navy rounded-lg hover:text-wheaty hover:border-yellow-600 hover:border-2 align-middle mt-4" type='Submit'>Submit</button>


              </div>
            
            {/* <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT US</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div> */}

            
          </div>
          
        </div>
        </form>
        <div className="border-t border-gray-800">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-3">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Subscribe to our Newsletter</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out required" />
              </div>
              <button className="inline-flex text-black bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-navy rounded-lg hover:text-wheaty hover:border-yellow-600 hover:border-2">Subscribe</button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Enter
                Email ID to get updates on ACM events
                <br className="lg:block hidden" /> and ACM NewsLetter
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-400" href='https://www.facebook.com/acmmjcet'>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href='https://youtube.com/channel/UC_IVqCOEFDHOUxpkrfF9Utg'>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-7" viewBox="0 0 24 24">
                  {/* <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path> */}
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href='https://mobile.twitter.com/AcmMjcet'>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>

                </svg>
              </a>
              <a className="ml-3 text-gray-400" href='https://instagram.com/mjcet_acm?igshid=YmMyMTA2M2Y='>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href='https://www.linkedin.com/company/acmmjcet/'>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-navy bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 ACM-MJCET —
              <a href="https://instagram.com/mjcet_acm?igshid=YmMyMTA2M2Y=" className="text-gray-500 ml-1 cursor-pointer" target="_blank" rel="noopener noreferrer">@mjcet_acm</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">The engineer has been, and is, a maker of history.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
