import React from 'react'

const git = () => {
  return (
    <div>
        <div className='container mx-auto flex flex-col justify-center items-center w-3/4 mt-6 font-bold cursor-pointer'>
            <h1 className='text-center text-2xl md:text-4xl text-yellow-600 mb-3 '>Git Going</h1>
            <h2 className='text-right text-md md:text-lg text-navy  mb-7'>30th May 2021</h2>
            <div className=' rounded-lg'>
               <img src="/media/git.png" alt="" className='rounded-lg' />
            </div>
            <div className='container mx-auto md:w-2/3 mt-5'>
                <p>
                <span className='text-yellow-600 text-lg md:text-xl'>ACM MJCET</span>
                 presented the event "GIT GOING", a hands-on event on command line interface, Git, and GitHub. All the functional implementations of the most popular tool for project collaboration were demonstrated. 
 </p><p> Github being the largest platform for inter professional project collaborations, it is a well-fended podium that is an immense requirement for students to traverse and explore to properly maintain their projects and collaborate with their peers. ACM MJCET provided an audience of over 100 students with all the essential knowledge and setup for them to get started with Git.</p>
 <p>
 The event was based on Command Line Interfaces, Git and GitHub. And how Programmers, developers and project managers use these tools for collaborating in many organizations.

<p></p>
 
<p>Registration Fee: Free</p>
<p>No. of participants: 120 </p>


                </p>
            </div>
        </div>
    </div>
  )
}

export default git