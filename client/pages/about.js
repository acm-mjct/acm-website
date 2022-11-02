import Image from 'next/image'
import React from 'react'
import Execom from './Execom'

const about = () => {
  return (
    <div className='w-4/5 md:w-3/4 mx-auto mt-5 overflow-hidden h-full'>
      <h1 className='text-xl md:text-3xl text-yellow-500 mt-3 font-bold mb-7 text-center'>ACM(Association for Computing Machinery)</h1>
      <b className='text-navy-light'>About ACM:</b>
      <div className='container  flex flex-col md:flex-row mb-0 lg:mb-4 md:mb-10'>
        <p className='md:w-2/3 mb-5 md:mb-0 md:mr-4'>
          The Association for Computing Machinery (ACM) is a U.S.-based international learned society for computing. It was founded in 1947 by <span className='font-bold italic text-yellow-500'>Richard Hamming</span> and is the world's largest and most prestigious scientific and educational computing society. It is a not-for-profit professional membership group. Its membership is more than 100,000 as of 2011. Its headquarters are in New York City. ACM is widely recognized as the premier membership organization for computing professionals, delivering resources that advance computing as a science and a profession; enable professional development; and promote policies and research that benefit society.
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
          <h1 className='text-2xl md:text-4xl  text-yellow-500 mt-7 font-bold mb-7 text-center'>Senior Execom</h1>
        </div>
        <div>
          <div className='container  mx-auto flex flex-col flex-wrap lg:flex-row justify-center lg:justify-around mb-14 '>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>

          </div>
          <div className='container  mx-auto flex flex-col flex-wrap lg:flex-row justify-center lg:justify-around mb-14 '>
            <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-0 lg:mb-4 pb-7'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 '>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>

          </div>
          <div className='container  mx-auto flex flex-col flex-wrap lg:flex-row justify-center lg:justify-around mb-14 '>
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 pb-14'>
              <div className=' w-48 h-48 rounded-full overflow-hidden '>
                <img src='/media/vr.png' className='' />

              </div>
              <h1 className='text-3xl  mt-4'>Virat Kohli</h1>
              <h2 className=''>Batsman</h2>
            </div>
            <div className='container  mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 '>
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
            <div className='container mx-auto  flex flex-col justify-center items-center max-w-sm  h-96 bg-inherit cursor-pointer  border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-0 lg:mb-4 '>
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
          <h1 className='text-2xl md:text-4xl  text-yellow-500  mt-7 font-bold mb-7 text-center'>Meet Our Senior Execom</h1>
        </div>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 content-center pb-8 gap-y-12 gap-x-14'>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7 group  '>
            <div className=' w-48 h-60 rounded-full overflow-hidden group-hover:scale-105 '>
              <img src='/profs/madiha1.png' className='' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Madiha Siddique</h1>
            <h2 className='font-bold text-yellow-500'>Chairperson</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-4 pb-7 group '>
            <div className=' w-48 h-60 rounded-full overflow-hidden  group-hover:scale-105'>
              <img src='/profs/has.png' className='' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Haseeb khan</h1>
            <h2 className='font-bold text-yellow-500'>Vice Chair</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7 group '>
            <div className=' w-48 h-54 rounded-full overflow-hidden  group-hover:scale-105'>
              <img src='/profs/maheen.png' className='' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Syeda Maheen</h1>
            <h2 className='font-bold text-yellow-500'>Treasurer</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 hover:border-navy  border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-4 pb-7  group hover:bg-opacity-40'>
            <div className=' w-48 h-60 rounded-full overflow-hidden  group-hover:scale-105 group-hover:bg-opacity-40'>
              <img src='/media/vr.png' className='' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Maryum Urooj</h1>
            <h2 className='font-bold text-yellow-500'>Internal Affairs</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm  mb-8 pb-7 group'>
            <div className=' w-48 h-52 rounded-full overflow-hidden group-hover:scale-105 '>
              <img src='/profs/rafe.png' className='' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Syed Rafey Ahmed</h1>
            <h2 className='font-bold text-yellow-500'>Advisor</h2>
          </div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm mb-4 pb-7 group'>
            <div className=' w-48 h-69 rounded-full overflow-hidden group-hover:scale-105 '>
              <img src='/profs/maleha.png' className='' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Maleha Sarwat Ansari</h1>
            <h2 className='font-bold text-yellow-500'>Secretary</h2>
          </div>
       
        </div>
        <div>
          <div className='container mx-auto flex flex-col justify-center items-center max-w-sm h-96 bg-inherit cursor-pointer border-yellow-500 border-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-sm   mb-4 pb-7 mt-9 lg:mt-0 content-center group'>
            <div className=' w-48 h-48 rounded-full overflow-hidden  group-hover:scale-105'>
              <img src='/profs/ar2.png' className='rounded-full' />

            </div>
            <h1 className='text-2xl font-bold  mt-4 text-navy'>Syed Abdul Rahman</h1>
            <h2 className='font-bold text-yellow-500'>Tech Captain</h2>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-6 mx-11 h-px bg-gray-200 border-0 dark:bg-gray-700 z-50" />
      <h1 className='text-2xl md:text-4xl  text-navy-light mt-7 font-bold mb-7 lg:mb-12 text-center'>Meet Our Junior Execom</h1>
    
      <div className='container mx-auto w-2/3 md:w-3/4 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mb-5'>
        <div className=' container flex flex-col items-center justify-center border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] h-72'>
          <div className=' w-32 h-32 rounded-full overflow-hidden relative hover:cursor-pointer group '>
          <img src='/profs/adeeb1.png' className='' />
          </div>

          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Adeeb Abdul Taher</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Human Resources</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4  cursor-pointer'>
            <img src='/profs/maryum1.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Mariyam Arshiya</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Human Resources</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/masood1.png' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Masood Ahmed</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Logistics</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/affan1.png' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Quazi Affan Ahmad</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Logistics</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/anum1.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Anum Rida</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Media</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
        <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/yasir.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Yasir Hussain</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Marketing</h2>
        </div>
        
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/hadi.jpeg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Abdul Hadi</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Documentation</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/juweria1.png' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Juwairia Baig</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Documentation</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/my.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Abdul Basith</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Technical</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/aaqeeb.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Aaqeb Ahmed Nawaz</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Technical</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/asr.jpeg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Mohd Asrar Ahmed</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Technical</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/uzzma.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Uzma Begum</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Design</h2>
        </div>
       
       
      </div>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-2 mt-10  w-2/3 md:w-3/4 lg:w-2/3 mb-10'>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/zain1.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Syed Zain Hussaini</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Content Creation</h2>
        </div>
        <div className=' container flex flex-col items-center justify-center py-7 border-2 mt-9 md:mt-0 border-navy rounded-sm shadow-md shadow-navy hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer'>
          <div className=' w-32 h-32 rounded-full overflow-hidden mt-4 '>
            <img src='/profs/waqas.jpg' className='' />

          </div>
          <h1 className='text-xl font-semibold text-yellow-500 mt-4 text-center'>Waqas Faraz</h1>
          <h2 className='text-center mb-3 font-semibold text-navy'>Social Media Marketing</h2>
        </div>
        </div>
    </div>
  )
}

export default about
