import React, { useState } from 'react'

function Education({educationData}) {

    const [isVisible,setIsVisible]=useState(false);
    const [selected,setSelected]=useState("bachelor");
   
function toggleVisibility() {
    setIsVisible(!isVisible); // This toggles between true and false
  }

  
    return (
        <div id='education' className='dark:text-white  '>

            <h1 className='font-bold text-center m-3 p-3 text-2xl'>Education</h1>

            <div className='flex justify-center'>
 <button  className='dark:bg-gray-700 bg-cyan-100 border rounded-2xl p-1 pl-2 pr-2 m-3 hover:bg-gray-800 sm:hidden' onClick={toggleVisibility} >Show Education</button>
            </div>
           
           {isVisible && (
            <div className='flex flex-col items-center md:flex-row gap-5 md:items-start sm:mx-10'>
            <div id='threebtn  ' className='md:flex md:flex-col sm:flex-none sm:my-5'>

    <button  className={` border rounded-2xl m-1 p-1 sm:my-2 ${selected==="secondary"?`bg-[#42d1f5]`:`dark:bg-gray-700 bg-cyan-100`} `}  onClick={()=>setSelected("secondary")}>Secondary</button>
   
               
             
                 <button  className={` border rounded-2xl m-1 p-1 sm:my-2 ${selected==="higherSecondary"?`bg-[#42d1f5]`:`dark:bg-gray-700 bg-cyan-100`} `}  onClick={()=>setSelected("higherSecondary")}>Higher Secondary</button>

  <button  className={` border rounded-2xl m-1 p-1 sm:my-2 ${selected==="bachelor"?`bg-[#42d1f5]`:`dark:bg-gray-700 bg-cyan-100`} `}  onClick={()=>setSelected("bachelor")}>Bachelor</button>
              
             
 </div>
          
               <div className='m-2 p-5 w-80  h-fit dark:bg-gray-800 bg-cyan-100 rounded-2xl sm:flex-1'>
                <h1 className='m-2 font-bold text-xl text-[#42d1f5]' >{educationData[selected].school}</h1>
                <h3 className='font-semibold m-2'>{educationData[selected].location}</h3>
                <h5 className='m-2'> <span className='font-bold text-xl'>Subject </span>:{educationData[selected].subject}</h5>
                <p className='m-1 '>{educationData[selected].description}</p>
                <h3 ><span className='font-bold'> percentage :</span> {educationData[selected].percentage}</h3>
                
              
            </div>
            </div>
            )}
        </div>
    )
}

export default Education
