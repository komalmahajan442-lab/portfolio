import React from 'react'
import komal from './komal.jpg';
import {TypeAnimation} from 'react-type-animation';

function Home() {
    return (
      <>

     <div id='home' className=' flex flex-col dark:text-white text-black justify-between items-center  md:items-left md:flex-row-reverse md:justify-start md:h-screen'>
      <div className='w-75 h-95 mt-30 md:mt-10  p-2  border-l-8 border-r-8 border-b-8 border-gray-500 md:border-none md:mr-40 relative '>
       
<img className=' relative  w-80 h-90 z-10 md:max-h-88 md:max-w-100' src={komal} alt='komal Image'></img>
        <div className='hidden md:block absolute top-10 left-20 ml-2 z-0  border-r-[3.2rem] border-gray-700 h-95 border-b-[3rem] w-75 bg-gray-900 '></div>
  
</div> 
<div  className='flex flex-col  m-2 p-2 items-center   md:leading-8 md:pt-5 md:pb-5 md:mr-10'>
  <div className='mt-4 p-4'>
  
    <TypeAnimation
      sequence={[
        'Hello, I am Komal Mahajan.', 
        1000,                 
        'I am a MERN Stack Developer.', 
        1000,
        'I love coding 💻',
        1000,
      ]}
      wrapper="span"
      speed={50}     
      deletionSpeed={30}
      repeat={Infinity} 
      className="text-5xl font-bold text-cyan-500"
    />
  <p className='text-lg text-center md:text-start'>MERN Stack Developer eager to work on real-world projects, learn from experience, and grow as a full stack engineer.</p>
  
  </div> 


  <div className='mb-10 flex  w-full   md:justify-start m-10'>
    <a className="bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 
             text-white px-5 py-2 rounded-3xl  hover:shadow-2xl hover:shadow-indigo-400/50 font-medium transition cursor-pointer
              align-items:start "
             href='/Komal_Mahajan.pdf'
download='Komal_Mahajan.pdf'
          
><i class="fa-regular fa-file"></i> Download CV</a>
  </div>
</div>

     </div>
      </>  
    )
}




export default Home;



