import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const events = () => {
  return (
    <div className='text-navy mb-10 cursor-pointer '>
      <div className='cursor-pointer  hover:bg-wheaty mt-6 text-2xl md:text-3xl lg:text-4xl text-center  px-5 py-3 text-yellow-500 mx-auto w-1/2 lg:w-1/3 rounded-full  tracking-wide'>
        <h1 className='font-extrabold '>Previous Events </h1></div>
      <Link href="/eventPage/wdbt">
        <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3 bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out 
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
          <h1 className='md:hidden text-2xl  font-bold text-center mt-2 mb-4'>Web Development BootCamp</h1>
          <Image src='/media/oney.png' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
          <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
            <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible '>Web Dev BootCamp
            </h1>
            <p className='mx-7 mt-1 mb-3 text-left'>Web Development Bootcamp was a two day hands on event, platformed online through Google meet. Over 100 participants across MJCET took part in learning Web development through ACM.The event consisted of teaching the beginner levels of HTML and CSS by the ACM MJCET excecom, followed by firsthand operations and implementation of those teachings into building a self profile by individual participants........</p>
          </div>
        </div></Link>
      <hr className="mt-14 mx-11 visible md:invisible h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Link href="/eventPage/git">
      <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3  bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out group
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
        <h1 className='md:hidden text-3xl font-bold text-center mt-2 mb-4'>Git Going</h1>
        <Image src='/media/git.png' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
        <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
          <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible '>Git Going
          </h1>
          <p className='mx-7 mt-1 mb-3 text-left'>ACM MJCET presented the event "GIT GOING", a hands-on event on command line interface, Git, and GitHub. All the functional implementations of the most popular tool for project collaboration were demonstrated. ACM MJCET provided an audience of over 100 students with all the essential knowledge and setup for them to get started with Git........
          </p>
        </div>
      </div>
      </Link>
      <hr className="mt-14 mx-11 visible md:invisible h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3 bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
        <h1 className='md:hidden text-3xl font-bold text-center mt-2 mb-4'>Designing Algorithms</h1>
        <Image src='/media/l.jpg' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
        <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
          <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible'>Designing Algorithms
          </h1>
          <p className='mx-7 -mt-4 mb-3 md:mt-1 text-left'>ACM MJCET called in the special speaker, Ricardo baeza-yates to educate students from across India on the topic of Designing Algorithms. Since modern computing uses algorithms much more frequently today than at any other point in human history, a field has grown up around their design, analysis and refinement. This is a relatively new field, and the heightened relevance of designing and refining algorithms is a very much a recent phenomenon.......
          </p>
        </div>
      </div>
      <hr className="mt-14 mx-11 visible md:invisible h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3  bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
        <h1 className='md:hidden text-3xl font-bold text-center mt-2 mb-4'>Quantum Computing</h1>
        <Image src='/media/k.jpg' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
        <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
          <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible'>Quantum Computing
          </h1>
          <p className='mx-7 -mt-4 mb-3 md:mt-1 text-left'>ACM MJCET provided the platform to educate students across India about Quantum Computing. Quantum Computing is a concept that has grown exponentially and has a large possibility of exceeding current standards of computation and problem solving systems. Quantum Computing is the leap forward from our traditional programming language.......
          </p>
        </div>
      </div>
      <hr className="mt-14 mx-11 visible md:invisible h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3 bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
        <h1 className='md:hidden text-3xl font-bold text-center mt-2 mb-4'>Mystery Grounds</h1>
        <Image src='/media/j.png' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
        <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
          <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible'>Mystery Grounds
          </h1>
          <p className='mx-7 -mt-4 mb-3 md:mt-1 text-left'>This whole event was initiated in the light of coming out from the covid lockdown. 2 Rounds of exciting games were planned out, reflecting teamwork and collaboration spirit. A Cash prize of Rs.2000 was given to the winning team. Under this hunt, ACM MJCET conducted a campus wide killer hunt competition. Students were supposed to find clues distributed throughout the campus. Killer hunt was an interesting game......
          </p>
        </div>
      </div>
      <hr className="mt-14 mx-11 visible md:invisible h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3  bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
        <h1 className='md:hidden text-3xl font-bold text-center mt-2 mb-4'>ICRISAT Trip
        </h1>
        <Image src='/media/icri.png' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
        <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
          <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible'>ICRISAT Trip

          </h1>
          <p className='mx-7 -mt-4 mb-3 md:mt-1 text-left'>ICRISAT, is a non-profit, Non-Political Public International Research Organization that conducts Agricultural Research for Rural Development.
            The session started with an introduction about ICRISAT and its avant-garde research and development programmes taken up to improve food production around the world. On arrival, the members were given a session by Mr. Arun Balamattti, Senior Manager.......
          </p>
        </div>
      </div>
      <hr className="mt-14 mx-11 visible md:invisible h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container mx-auto mt-7 flex flex-col md:flex-row w-4/5  md:w-3/4 lg:w-2/3 bg-inherit rounded-xl  md:border-solid md:border-2 hover:scale-105 hover:transition hover:ease-out
     md:border-opacity-50 overflow-y-hidden border-none md:border-navy  hover:bg-navy hover:bg-opacity-80 hover:text-wheaty ">
        <h1 className='md:hidden text-3xl font-bold text-center mt-2 mb-4'>Javascript Garage
        </h1>
        <Image src='/media/i.png' height={360} width={320} className="cursor-pointer scale-90 md:scale-100" />
        <div className='flex flex-col w-full md:w-2/3 items-center text-center'>
          <h1 className='text-sm md:text-3xl font-bold  text-center  md:mt-11 mb-0 md:mb-4 invisible md:visible'>Javascript Garage

          </h1>
          <p className='mx-7 -mt-4 mb-3 md:mt-1 text-left'>JavaScript 101, An Introductory workshop where the basics of JavaScript were taught from scratch by our core team members. JavaScript is a powerful and flexible programming language. This was a golden opportunity for those who wanted to kick-start their programming journey with JavaScript.
            It was an interactive workshop where the participants.......
          </p>
        </div>
      </div>


    </div>
  )
}

export default events
