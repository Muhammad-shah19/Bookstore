import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
const SignUp = () => {
  const [auth, setAuth] = useAuth();
   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userinfo = {
      fullname: data.name,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:5000/user/signup",userinfo).then((res)=>{
      if(res.data){
        toast.success("user created");
         setAuth(res.data.user);
        navigate("/", {replace:true});
        console.log(res.data);
      }
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
       toast.error("user exist already", err.response.data.message);
      }
    }
    )
  }
  

  return <>
  <div className="flex justify-center items-center h-screen">
  <div id="my_modal_3" className="z-160  rounded-sm shadow-2xl p-5 relative w-130" >
    <div className="">
    <form onSubmit={handleSubmit(onSubmit)} >
      <button className="bg-red-600 text-xl text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-3.5"><Link to="/">X</Link></button>
    
    <h3 className="font-bold text-2xl">Sign Up</h3>
    <div className='py-2'>
    <div className='py-3'>
        <p className='text-xl'>Name</p>
        <input {...register("name", { required: true })} type="text" className='px-3 p-2 w-full  border mt-3 rounded-sm  ' placeholder='enter name' />
        {errors.name && <span className='text-sm text-red-600' >This field is required</span>}
      </div>
      <div className='py-3'>
        <p className='text-xl'>Email</p>
        <input {...register("email", { required: true })}  type="email" className='px-3 p-2  w-full  border mt-3 rounded-sm  ' placeholder='enter email'/>
        {errors.email && <span className='text-sm text-red-600' >This field is required</span>}
      </div>
      <div>
        <p>Password</p>
        <input {...register("password", { required: true })}  type="password" className='px-3 p-2  w-full  border mt-3 rounded-sm '  placeholder='enter email' />
        {errors.password && <span className='text-sm text-red-600' >This field is required</span>}
      </div>
      <div className='flex justify-between items-center '>
          <div>
          <button type='submit' className='bg-pink-500 hover:bg-pink-700 duration-200 p-1 mt-5 text-white text-bold rounded-sm cursor-pointer w-20 '>Sign Up</button>
          </div>
          <div className='text-center mt-5'>
             <p>Already have an account? <Link to='/login' className='text-blue-600'>Log In</Link></p>
          </div>
      </div>
    </div>

    </form>
    </div>
    </div>
  </div>
     
  </>
}

export default SignUp
