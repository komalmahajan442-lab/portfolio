import React from 'react'

function Footer() {
    return (
<div className='dark:bg-gray-900 dark:text-white flex flex-wrap justify-between p-10 text-center'>
<div className=' p-3'>
<h1 className='text-4xl font-bold m-3 '>Contact</h1>
<p className=' text-2xl font-medium'>Feel Free To Reach Out</p>
</div>

<div className="flex items-center flex-col ">

<a><p className='mt-2 p-2 cursor-pointer'  ><i class="fa-solid fa-envelope"></i>komalmahajan743@gmail.com</p></a>
<a href='https://www.linkedin.com/in/komal-mahajan-4b4086317'><p className='mt-2 p-2 cursor-pointer'><i class="fa-brands fa-linkedin"></i> Komal Mahajan | LinkedIn</p></a>
<a href='https://github.com/komalmahajan442-lab/'><p className='mt-2 p-2 cursor-pointer'><i class="fa-brands fa-square-github"></i> Komal Mahajan</p></a>
</div>
</div>
    )
}

export default Footer
