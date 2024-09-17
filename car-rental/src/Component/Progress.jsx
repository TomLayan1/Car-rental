import React, { useContext } from 'react'
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";
import { RentalContext } from '../Context/Context';


const Progress = () => {
  const { booking } = useContext(RentalContext)
  return (
    <div className='flex items-end justify-between py-5 mb-6'>
      <div className='w-full flex items-center text-white'>
        <div className='w-[33.3%] '>
          <p className='hidden md:block text-center text-[15px]'>Vehicle Selection</p>
          <div className='flex items-center'>
            <div className={`${booking.selectCar ? 'bg-primaryColor' : 'bg-gray-200'} w-full h-1`}></div>
            <PiNumberCircleOneFill size={24} style={{ color: `${booking.selectCar ? '#fa7602' : '#e5e7eb'}` }} />
          </div>
        </div>

        <div className='w-[33.3%] '>
          <p className='hidden md:block text-center text-[15px]'>Choose A Loction</p>
          <div className='flex items-center'>
            <div className={`${booking.pickUp ? 'bg-primaryColor' : 'bg-gray-200'} w-[50%] h-1`}></div>
            <div className={`${booking.pickUp && booking.dropOff ? 'bg-primaryColor' : 'bg-gray-200'} w-[50%] h-1`}></div>
            <PiNumberCircleTwoFill size={24} style={{ color: `${booking.pickUp && booking.dropOff ? '#fa7602' : '#e5e7eb'}` }} />
          </div>
        </div>

        <div className='w-[33.3%] '>
          <p className='hidden md:block text-center text-[15px]'>Pick A Date</p>
          <div className='flex items-center'>
            <div className={`${booking.pickUpDate ? 'bg-primaryColor' : 'bg-gray-200'} w-[50%] h-1`}></div>
            <div className={`${booking.pickUpDate && booking.dropOffDate ? 'bg-primaryColor' : 'bg-gray-200'} w-[50%] h-1`}></div>
            <PiNumberCircleThreeFill size={28} style={{ color: `${booking.pickUpDate && booking.dropOffDate ? '#fa7602' : '#e5e7eb'}` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress