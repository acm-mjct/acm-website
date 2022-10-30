import Image from 'next/image'
import React from 'react'
import Execom from './Execom'

const about = () => {
  return (
    <div className='w-4/5 md:w-3/4 mx-auto mt-5 overflow-hidden h-full'>
      <h1 className='text-xl md:text-3xl text-yellow-600 mt-3 font-bold mb-7 text-center'>ACM(Association for Computing Machinery)</h1>
      <b className='text-navy-light'>About ACM:</b>
      <div className='container  flex flex-col md:flex-row mb-0 lg:mb-4 md:mb-10'>
        <p className='md:w-2/3 mb-5 md:mb-0 md:mr-4'>
          The Association for Computing Machinery (ACM) is a U.S.-based international learned society for computing. It was founded in 1947 by <span className='font-bold italic text-yellow-600'>Richard Hamming</span> and is the world's largest and most prestigious scientific and educational computing society. It is a not-for-profit professional membership group. Its membership is more than 100,000 as of 2011. Its headquarters are in New York City. ACM is widely recognized as the premier membership organization for computing professionals, delivering resources that advance computing as a science and a profession; enable professional development; and promote policies and research that benefit society.
        </p>
        <Image height={200} width={300} src='/media/ric2.jpg' className='h-48 w-16 inline-block rounded-md' />
      </div>
      <div className='mb-0 lg:mb-4 md:mb-7'>
        <b className='text-navy-light mt-5 pt-5'>Vision: </b>
        <p>
          ACM strengthens the computing profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life-long learning, career development, and professional networking.
        </p>
      </div>
      <div className='mb-0 lg:mb-4 md:mb-7'>
        <b className='text-navy-light mt-5 pt-5'>Membership:</b>
        <p>
          ACM MJCET assists you to become a part of the dynamic changes that are transforming our world, by helping to shape the future of computing. ACM provides the tools and resources to help get you there, by advancing your career and enriching your knowledge with life-long learning resources.

          • A vast network of nearly 100,000 highly dedicated student and professional peers
          • ACM's Career & Job Center, where you will find targeted job opportunities and more
          • Learning Center with resources for lifelong learning, including online courses targeted toward essential IT skills and popular certifications; online books & videos from Skillsoft®️, online books from O'Reilly®️, Morgan Kaufmann and Syngress; videos and webinars on hot topics, presented by today's innovators
          • The option to subscribe to the full ACM Digital Library, which includes over 2 million pages of text
          • Unique volunteering opportunities to gain hands-on experience and knowledge of the marketplace
          • The opportunity to join one or more of ACM's Special Interest Groups in 37 specialty areas of IT.
        </p>
      </div>
      <div className='mb-0 lg:mb-4 md:mb-7'>
        <b className='text-navy-light mt-5 pt-5'> Benefits:</b>
        <p>
          Association with the ACM brand - Networking - ACM-MJCET Identity card - 'InfoVogue'- The MJCET-IT Newsletter - 'Crossroads'- ACM Intl student journal(copy) - Weekly edition of ACM TechNews(through Email) - Knowledge Transfer - TechNews - CareerNews.
        </p>
      </div>
      <div className='mb-0 lg:mb-4 md:mb-7'>
        <b className='text-navy-light '>ACM-MJCET:</b>
        <p className=''>
          ACM @ MJCET is a student chapter of ACM at Muffakham Jah College of Engineering and Technology (MJCET). The Association for Computing Machinery is the world's largest educational and scientific computing society, uniting educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges. ACM-MJCET strengthens the computing profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM-MJCET supports the professional growth of its members by providing opportunities for life-long learning, career development, and professional networking.
        </p>

      </div>
      {/* <div>
        <div className=''>
          <hr className="mt-14 mx-11 h-px bg-gray-200 border-0 dark:bg-gray-700 z-50" />
          <h1 className='text-2xl md:text-4xl  text-yellow-600 mt-7 font-bold mb-7 text-center'>Senior Execom</h1>
        </div>
        <div>
          <div className='container  mx-auto flex flex-col flex-wrap lg:flex-row justify-center lg:justify-around mb-14 '>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>

          </div>
          <div className='container  mx-auto flex flex-col flex-wrap lg:flex-row justify-center lg:justify-around mb-14 '>
            <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-0 lg:mb-4 pb-7'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 '>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>

          </div>
          <div className='container  mx-auto flex flex-col flex-wrap lg:flex-row justify-center lg:justify-around mb-14 '>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 pb-14'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container  mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 '>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>

          </div>
          <div>


          </div>
          <div className='flex justify-center'>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer  border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 '>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className=''>
          <hr className="mt-14 mx-11 h-px bg-gray-200 border-0 dark:bg-gray-700 z-50" />
          <h1 className='text-2xl md:text-4xl  text-yellow-600 mt-7 font-bold mb-7 text-center'>Senior Execom</h1>
        </div>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 content-center pb-8 gap-y-12 gap-x-20'>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-4 pb-7'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-8 pb-7'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-4 pb-7'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>

        </div>
        <div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-600 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm   mb-4 pb-7 mt-9 lg:mt-0 content-center'>
            <div className=' w-48 h-48 rounded-full overflow-hidden '>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
            <h2 className=''>Batsman</h2>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-6 mx-11 h-px bg-gray-200 border-0 dark:bg-gray-700 z-50" />
      <h1 className='text-2xl md:text-4xl  text-navy-light mt-7 font-bold mb-7 lg:mb-12 text-center'>Junior Execom</h1>
      {/* <div className='container mx-auto flex flex-col lg:flex-row flex-grow h-60  mb-10 justify-between'>
          <div className='px-12 bg-green-700'>
          <div className=' w-32 h-32 rounded-full overflow-hidden '>
                    <img src='/media/vr.png' className='' />
                   
                  </div>
                  <h1 className='text-2xl  mt-4'>Virat Kohli</h1>
                  <h2 className=''>Batsman</h2>
          </div>
          <div className='px-12 bg-green-700'>
          <div className=' w-32 h-32 rounded-full overflow-hidden '>
                    <img src='/media/vr.png' className='' />
                   
                  </div>
                  <h1 className='text-2xl  mt-4'>Virat Kohli</h1>
                  <h2 className=''>Batsman</h2>
          </div>
          <div className='px-16  bg-green-700'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4'>
                    <img src='/media/vr.png' className='' />
                   
                  </div>
                  <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
                  <h2 className='text-center'>Batsman</h2>
          </div>
      </div> */}
      <div className='container mx-auto w-2/3 md:w-3/4 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mb-5'>
        <div className=' container flex flex-col items-center justify-center border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden '>
            <Image src='/profs/adeeb1.png' className='' height={228} width={228} />
          </div>

          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/anum1.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/maryum1.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/masood1.png' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/juweria1.png' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/zain1.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/waqas.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/uzzma.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/affan1.png' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/yasir.jpg' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/media/vr.png' className='' />

          </div>
          <h1 className='text-2xl  mt-4 text-center'>Virat Kohli</h1>
          <h2 className='text-center mb-3'>Batsman</h2>
        </div>
      </div>

    </div>
  )
}

export default about
