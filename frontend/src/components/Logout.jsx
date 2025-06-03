import React from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast';

const Logout = () => {
    const [auth, setAuth] = useAuth();
    const handlogout = ()=>{
        try {
            setAuth({
                ...auth,
                user: undefined,
            })
            toast.success("Logout Successfully");
            localStorage.removeItem("user");

            setTimeout(() => {
              window.location.href = "/";
            }, 1000);

            
        } catch (error) {
            toast.error("Logout Failed");
            console.error("Logout Error:", error);
        }
    }
  return (
    <div>
      <button className='px-1 py-1 bg-amber-600 text-white rounded-md cursor-pointer' onClick={handlogout} >Logout</button>
    </div>
  )
}

export default Logout
