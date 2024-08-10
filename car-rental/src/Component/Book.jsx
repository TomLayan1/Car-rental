import React, { useState } from 'react'
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const Book = () => {

  // STATE FOR STORING BOOKING DATA
  const [booking, setBooking] = useState({
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })
  console.log(booking)

  const handleBooking = (event) => {
    setBooking(prev => {return { ...prev, [event.target.name]: event.target.value}});
  }

  
  return (
    <section id='book' className='h-[100vh] py-4  w-[80%] mx-auto flex flex-col items-center justify-center'>

      <h1 className='text-3xl text-primaryColor font-bold text-center mb-20'>Book A Car</h1>

      <form className='flex items-center gap-10 flex-wrap text-[15px]'>
        <div className='w-[30%]'>
          <div className='flex items-center gap-2  mb-2'>
            <FaCar  size={20} style={{ color: '#fa7602'}} />
            <p>Select car type</p>
          </div>
          <select
          name='selectCar'
          onChange={handleBooking}
          className='w-full text-[15px] p-2 border bg-orange-50 border-primaryColor outline-0  text-black'>
            <option>Selct car</option>
            <option>Car 1</option>
            <option>Car 2</option>
            <option>Car 3</option>
            <option>Car 4</option>
            <option>Car 5</option>
            <option>Car 6</option>
          </select>
        </div>

        <div className='w-[30%]'>
          <div className='flex items-center gap-2 mb-2'>
            <FaLocationDot size={20} style={{ color: '#fa7602'}} />
            <p>Pick-up location</p>
          </div>
          <input
          type='text'
          name='pickUp'
          onChange={handleBooking}
          placeholder='Location Here'
          className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0 text-black' />
        </div>

        <div className='w-[30%]'>
          <div className='flex items-center gap-2 mb-2'>
            <FaLocationDot size={20} style={{ color: '#fa7602'}} />
            <p>Drop-off location</p>
          </div>
          <input 
          type='text'
          name='dropOff'
          onChange={handleBooking}
          placeholder='Location Here' className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0 text-black' />
        </div>

        <div className='w-[30%]'>
          <div  className='flex items-center gap-2 mb-2'>
            <MdDateRange size={20} style={{ color: '#fa7602'}} />
            <p>Pick-up date</p>
          </div>
          <input
          type='date'
          name='pickUpDate'
          onChange={handleBooking}
          className='w-full text-[15px] p-2  bg-orange-50 border border-primaryColor outline-0  text-black' />
        </div>
        <div className='w-[30%]'>
          <div  className='flex items-center gap-2 mb-2'>
            <MdDateRange size={20} style={{ color: '#fa7602'}} />
            <p>Drop-off date</p>
          </div>
          <input 
          type='date'
          name='dropOffDate'
          onChange={handleBooking}
          className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0  text-black' />
        </div>
        
        <button className='bg-primaryColor w-[30%] py-2 mt-8 text-white'>Submit</button>
      </form>
    </section>
  )
}

export default Book