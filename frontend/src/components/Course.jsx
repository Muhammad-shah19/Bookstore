import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Course = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try {
        const res = await axios.get("http://localhost:5000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  const ListItemPaid = book.filter((item)=>item.category === "Paid");  
  return (
    <>
      <div className='mt-28 text-center justify-center z-10 max-w-screen-2xl container mx-auto md:px-40 px-4'>
        <div>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you here <span className='text-pink-400'>Here!:)</span></h1>
        </div>
        <div className='mt-10'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorum ab, totam modi nihil vero sit voluptas. Sapiente minima, neque culpa harum, nisi, repudiandae blanditiis incidunt quidem magnam assumenda error. Sapiente minima, neque culpa harum, nisi, repudiandae blanditiis incidunt quidem magnam assumenda error.</p>
          <Link to="/"><button className=' cursor-pointer px-5 py-1 text-white bg-pink-500 rounded-md mt-5'>Back</button></Link>
        </div>
      </div>
      <div className='justify-center z-10 max-w-screen-2xl container mx-auto md:px-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 '>
          {ListItemPaid.map((it,index)=>(
            <Card key={index} receiveItems={it} />
          ))}
        </div>
    </>
  )
}

export default Course;