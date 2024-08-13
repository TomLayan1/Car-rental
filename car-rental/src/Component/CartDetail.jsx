import React from 'react'
import { FaPenFancy } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import rollsRoyce from '../Assets/Images/rolls-royce-dawn.png'


const CartDetail = () => {
  return (
    <section className='lg:w-full mx-auto flex flex-col lg:flex-row gap-8 py-10 lg:text-[15px]'>
      {/* SELETED CAR */}
      <div className='border border-gray-300 lg:w-[25%] shadow-customShadow'>
        <h3 className='font-bold text-black bg-gray-300 py-1 px-2'>Selected Vehicle</h3>
        <div className='p-2'>
          <img src={rollsRoyce} alt='Rolls Royce' className='mb-3 w-[250px' />
          <p className=''>Roll Royce Dawn</p>
        </div>
      </div>

      {/* DETAILS */}
      <div className='border border-gray-300 lg:h-[220px] shadow-customShadow text-[15px]'>
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

      {/* RATE QUOTE */}
      <div className='border border-gray-300 lg:w-[25%] h-[200px] lg:h-[200px] shadow-customShadow text-[15px]'>
        <h3 className='font-bold text-black bg-gray-300 py-1 px-2'>Rate Quote</h3>
        <div className=' px-2 flex flex-col justify-between'>
          <div className=''>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>Car Price</p>
              <p className=''>$0.00</p>
            </div>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>Tax</p>
              <p className=''>$0.00</p>
            </div>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>Total</p>
              <p className=''>$0.00</p>
            </div>
          </div>
          <button className='bg-primaryColor text-white w-full py-2'>Book Car</button>
        </div>
      </div>
    </section>
  )
}

export default CartDetail