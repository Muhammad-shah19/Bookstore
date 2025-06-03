import React from 'react'
import Home from './components/Home'
import { Routes,Route, Navigate } from 'react-router-dom'
import Courses from './courses/Courses'

import SignUp from './components/SignUp'
import Login from './components/Login'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthContext'

const App = () => {
    const [authUser,setAuthUser] = useAuth();
  console.log("authUser", authUser);
  
  return (
    <>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='course' element={authUser ? <Courses /> : <Navigate to="/signup"/> } />
        <Route path='login' element={<Login/>}/>
        <Route path = "signup" element={<SignUp/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Toaster/>
    </>
      
  )
}

export default App
