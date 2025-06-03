import React from 'react'
import {useForm} from "react-hook-form"
import { Link, Links } from 'react-router-dom';
import Navbar from './Navbar'
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
      
  return (
        <>
        <Navbar/>
    <div className='flex justify-center items-center h-screen'>
    <div className='z-160  rounded-sm shadow-2xl p-5 relative w-130'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Link to="/" className="bg-red-600 text-xl text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-3.5">✕</Link>

      <h3 className="font-bold text-3xl">Contact Us</h3>
    <div className='py-2'>
      <div className='py-3'>
        <p className='text-xl'>Name</p>
        <input {...register("name", { required: true })} type="text" className='px-3 p-2  border mt-3 rounded-sm w-full ' placeholder='enter name' />
        {errors.name && <span className='text-sm text-red-600' >This field is required</span>}
      </div>
      <div>
        <p>Email</p>
        <input {...register("email", { required: true })} type="email" className='px-3 p-2  border mt-3 rounded-sm w-full '  placeholder='email address' />
        {errors.email && <span className='text-sm text-red-600' >This field is required</span>}
      </div>

      <div className='mt-5' >
        <p>Message</p>
        <textarea {...register("message", { required: true })} type="text" className='px-3 p-2  border mt-3 rounded-sm w-full '  placeholder='enter message' />
        {errors.message && <span className='text-sm text-red-600' >This field is required</span>}
      </div>

      <div className='flex justify-between items-center '>
          <div>
          <Link to="/" type='submit' className='bg-pink-500 hover:bg-pink-700 duration-200 p-1 mt-5 text-white text-bold rounded-sm cursor-pointer w-20 '>Sumbit</Link>
             
          </div>
    
      </div>
    </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Contact
