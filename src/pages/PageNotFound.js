import React from 'react'
import image from '../images/404.png'
import { Link } from 'react-router-dom'


export const PageNotFound = () => {
  return (
    <main className=''>
<section className='flex flex-col justify-center px-2'>
  <div className='flex flex-col items-center my-4'>
<p className='text-grey-700 my-10 text-7xl font-bold dark:text-white'>404, oops!</p>
<div className='max-w-lg'><img src={image} alt="" />
</div>
  
  </div>
  <div   className="flex justify-center my-4">
   <Link to="/" >
   <button className="w-64 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg py-2.5 px-5 mr-2 mb-2 font-medium">
Back to Home
   </button>
   </Link>
  </div>
</section>
    </main>
  )
}
