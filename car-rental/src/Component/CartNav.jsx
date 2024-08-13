import React from 'react'
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNumberCircleFiveFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";


const CartNav = () => {
  return (
    <div className='flex items-end justify-between py-5 mb-6'>
      <div className='w-[92%] lg:w-[97%] flex items-center text-white'>
        <div className='w-[25%] '>
          <p className='hidden md:block text-center text-[15px]'>Vehicle Selection</p>
          <div className='flex items-center'>
            <div className='bg-gray-400 w-full h-1'></div>
            <PiNumberCircleOneFill size={28} style={{ color: 'gray' }} />
          </div>
        </div>

        <div className='w-[25%] '>
          <p className='hidden md:block text-center text-[15px]'>Choose A Loction</p>
          <div className='flex items-center'>
            <div className='bg-gray-400 w-full h-1'></div>
            <PiNumberCircleTwoFill size={28} style={{ color: 'gray' }} />
          </div>
        </div>

        <div className='w-[25%] '>
          <p className='hidden md:block text-center text-[15px]'>Pick A Date</p>
          <div className='flex items-center'>
            <div className='bg-gray-400 w-full h-1'></div>
            <PiNumberCircleThreeFill size={28} style={{ color: 'gray' }} />
          </div>
        </div>

        <div className='w-[25%] '>
          <p className='hidden md:block text-center text-[15px]'>Book A Vehicle</p>
          <div className='flex items-center'>
            <div className='bg-gray-400 w-full h-1'></div>
            <PiNumberCircleFourFill size={28} style={{ color: 'gray' }} />
          </div>
        </div>
      </div>
      <FaCar size={26} style={{ color: 'gray' }} />
    </div>
  )
}

export default CartNav