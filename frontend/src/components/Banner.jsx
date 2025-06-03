import React from 'react'
import banner from '../../public/book.avif';
import { Link } from 'react-router-dom';
const Banner = () => {
  return <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  mt-10'>
    <div className='w-full md:w-1/2 mt-12 md:mt-30 '>
        <div className='space-y-12'> 
        <h1 className='font-bold text-4xl'>Hello, Welcome here to learn something <span className='
        text-pink-600'>new everyday!!!</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in at dignissimos reprehenderit corrupti ea nam ad laboriosam similique tempore minus dolor vero est aliquam accusamus, facilis, unde explicabo dolorum.</p>
        
        </div>
        <label className="input validator mt-5 flex w-full  ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input className='outline-none  ' type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
     <Link to="/login" className="btn btn-secondary mt-5">Get started</Link> 
    </div>
    <div className='w-full md:w-1/2 md:ml-15 mt-5'>
      <img className='w-100 h-100 md:w-120 md:h-120' src={banner} alt="" />
    </div>
  </div>
  </>
}

export default Banner
