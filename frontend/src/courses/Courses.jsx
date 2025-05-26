import React from 'react'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Courses = () => {
  return (
    <div>
     <Navbar/>
      <div className="min-h-screen">
        <div>
              <Course/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
