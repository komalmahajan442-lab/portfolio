import React from 'react'
import komal from "./komal.jpg"

function About() {
    return (
        <>
      <div id='about' className='flex flex-col items-center bg-cyan-50 dark:text-white  dark:bg-gray-800  md:h-screen' >
       
        
        <h1 className='mb-5 mt-15 text-center border rounded-xl dark:bg-gray-700 max-w-fit pr-5 pl-5 text-gray-300 '>About</h1>
    
<div className=' flex   items-center md:flex-row justify-between md:gap-20'>
        <div className='relative w-75 h-95  p-2  border-l-8 border-r-8 border-b-8 border-gray-500 md:border-none md:ml-5 '>
          <img className='  relative z-10 w-80 h-90  md:max-h-88 md:max-w-80' src={komal} alt='komal Image'></img>
           <div className='hidden  md:block absolute top-10 left-20 ml-2 z-0  border-r-[3.2rem] border-gray-700 h-95 border-b-[3rem] w-75 bg-gray-900 '></div>
        </div> 

        <div className='m-5'>
         
            <h1 className='font-bold text-2xl m-5'>Curious about me? Here you have it:</h1>
            <p className='m-5 text-xl'>I am a passionate Full Stack Web Developer with expertise in building dynamic, responsive, and user-friendly web applications. With a strong foundation in the MERN stack and modern web technologies, I focus on crafting seamless user experiences, developing robust backend systems, integrating RESTful APIs, managing databases efficiently, and deploying scalable applications.</p>
           <h1 className='font-bold m-5 text-xl'>My Approach & Passion</h1>
            <p className='m-5 text-xl'>I continuously adapt to new technologies to stay current in web development and create high-performance, visually engaging, and user-focused digital experiences.</p>
         
        </div>
      </div>
     </div>
        </>
    )
}

export default About
