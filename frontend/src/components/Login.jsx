import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext'; 

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  // const location = useLocation();
  const [auth,setAuth] = useAuth(); 

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:5000/user/login", userinfo);
      if (res.data && res.data.user) {
        toast.success("Logged in successfully");

        localStorage.setItem("user", JSON.stringify(res.data.user));
        setAuth(res.data.user); // ✅ update context here

        setShowModal(false);
        // const from = location.state?.from?.pathname || "/";
        // navigate(from, { replace: true });
          navigate("/"); // Redirect to home page after login
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Login failed");
      }
    }
  };

  return (
    showModal && (
      <div className='flex justify-center items-center h-screen'>
        <div className="z-160 rounded-sm shadow-2xl p-5 relative w-130 bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/"
              
              className="bg-red-600 text-xl text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-3.5"
              onClick={() => setShowModal(false)}
            >✕</Link>

            <h3 className="font-bold text-2xl">Log in</h3>
            <div className='py-2'>
              <div className='py-3'>
                <p className='text-xl'>Email</p>
                <input {...register("email", { required: true })} type="email" className='px-3 p-2 border mt-3 rounded-sm w-full' placeholder='Enter email' />
                {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              <div>
                <p>Password</p>
                <input {...register("password", { required: true })} type="password" className='px-3 p-2 border mt-3 rounded-sm w-full' placeholder='Enter password' />
                {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              <div className='flex justify-between items-center'>
                <button type='submit' className='bg-pink-500 hover:bg-pink-700 duration-200 p-1 mt-5 text-white font-bold rounded-sm cursor-pointer w-20'>
                  Log in
                </button>
                <div className='text-center mt-5'>
                  <p>Not registered? <Link to='/signup' className='text-blue-600'>SignUp</Link></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
