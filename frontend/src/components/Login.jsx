import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex justify-center items-center h-screen' >

    <div id="my_modal_3" className="z-160  rounded-sm shadow-2xl p-5 relative w-130">

    <div>
      
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link to="/" className="bg-red-600 text-xl text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-3.5">✕</Link>

      <h3 className="font-bold text-2xl">Log in</h3>
    <div className='py-2'>
      <div className='py-3'>
        <p className='text-xl'>Email</p>
        <input {...register("email", { required: true })} type="email" className='px-3 p-2  border mt-3 rounded-sm w-full ' placeholder='enter email' />
        {errors.email && <span className='text-sm text-red-600' >This field is required</span>}
      </div>
      <div>
        <p>Password</p>
        <input {...register("password", { required: true })} type="password" className='px-3 p-2  border mt-3 rounded-sm w-full '  placeholder='enter password' />
        {errors.password && <span className='text-sm text-red-600' >This field is required</span>}
      </div>
      <div className='flex justify-between items-center '>
          <div>
          <button type='submit' className='bg-pink-500 hover:bg-pink-700 duration-200 p-1 mt-5 text-white text-bold rounded-sm cursor-pointer w-20 '>Log in</button>
          </div>
          <div className='text-center mt-5'>
             <p>Not registered? <Link to='/signup' className='text-blue-600'>SignUp</Link></p>
          </div>
      </div>
    </div>

    </form>
    
    </div>
    </div>
    </div>
  )
}

export default Login;