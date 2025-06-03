import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const FreeBook = () => {

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
  })


    const dataa = book.filter((items)=> items.category === "Free");
    // setting for slider
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>

    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div>
      <h1 className='font-bold  text-3xl'>Free offered Courses</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aliquid doloribus molestiae, nisi reprehenderit quibusdam quia dignissimos neque eveniet nostrum voluptatum quam vel possimus quidem dolor minus officiis sapiente distinctio?</p>
      </div>
   
    {/* slider */}
        <div>
        <Slider {...settings}>
            {dataa.map((items)=>(
              <Card receiveItems={items} key={items.id}/>
            ))}
        </Slider> 
        </div>
        </div>
    </>
  )
}

export default FreeBook;
