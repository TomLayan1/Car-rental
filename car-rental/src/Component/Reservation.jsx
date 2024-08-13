import React from 'react'
import { FaPenFancy } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import rollsRoyce from '../Assets/Images/rolls-royce-dawn.png'

const Reservation = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between lg:w-[75%]'>
      {/* SELETED CAR */}
      <div className='border border-gray-300 lg:w-[30%] shadow-customShadow'>
        <h3 className='font-bold text-black bg-gray-300 py-1 px-2'>Selected Vehicle</h3>
        <div className='p-2'>
          <img src={rollsRoyce} alt='Rolls Royce' className='mb-3 w-[250px' />
          <p className=''>Roll Royce Dawn</p>
        </div>
      </div>

      {/* DETAILS */}
      <div className='border border-gray-300 lg:w-[65%] lg:h-[220px] shadow-customShadow text-[15px]'>
        <h3 className='font-bold text-black bg-gray-300 py-1 px-2'>Your Detail</h3>
        <div className=' p-2'>
          <div className='md:flex flex-wrap '>
            <div className='mb-4 md:w-[50%]'>
              <div className='flex items-center gap-1 mb-2'>
                <FaLocationDot size={19} style={{ color: '#fa7602'}} />
                <p className='font-bold'>Pickup Location</p>
              </div>
              <p className='pl-6'>Lorem ipsum dolor</p>
            </div>
            <div className='mb-4 md:w-[50%]'>
              <div className='flex items-center gap-1 mb-2'>
                <MdDateRange size={19} style={{ color: '#fa7602'}} />
                <p className='font-bold'>Pickup Date</p>
              </div>
              <p className='pl-6'>00/00/0000</p>
            </div>
            <div className='mb-4 md:w-[50%]'>
              <div className='flex items-center gap-1 mb-2'>
                <FaLocationDot size={19} style={{ color: '#fa7602'}} />
                <p className='font-bold'>Dropoff Location</p>
              </div>
              <p className='pl-6'>Lorem ipsum dololr</p>
            </div>
            <div className='mb-4 md:w-[50%]'>
              <div className='flex items-center gap-1 mb-2'>
                <MdDateRange size={19} style={{ color: '#fa7602'}} />
                <p className='font-bold'>Dropoff Date</p>
              </div>
              <p className='pl-6'>00/00/0000</p>
            </div>
          </div>
          <hr className='mb-3'/>
          <div className='flex items-center gap-1 cursor-pointer mb-2'>
            <FaPenFancy size={19} style={{ color: '#fa7602' }} />
            <p className='font-bold'>Change</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation