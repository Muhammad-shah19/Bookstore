import React from 'react'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import Courses from './courses/Courses'

import SignUp from './components/SignUp'
import Login from './components/Login'
import Contact from './components/Contact'


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='course' element={<Courses />} />
        <Route path='login' element={<Login/>}/>
        <Route path = "signup" element={<SignUp/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
  )
}

export default App
