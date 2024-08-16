import React from 'react'
import { motion } from 'framer-motion'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { FaCar } from "react-icons/fa";

const HowItWorks = () => {

  return (
    <div className=' lg:w-[80%] mx-auto py-10 lg:py-24'>
        <motion.h2
          initial={{ translateY: 200, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center text-3xl md:text-4xl text-primaryColor font-extrabold mb-12'>How It Works</motion.h2>

        <div className='flex flex-col md:flex-row item-center gap-6 m-auto'>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='w-[100%] bg-gradient-to-b from-white to-orange-100 p-4 flex flex-col gap-4 items-center'>
            <FaCar size={32} style={{color: '#fa7602'}}  />
            <h4 className='text-lg text-black font-semibold'>Book Your Car</h4>
            <p className='text-[13px] text-black text-center'> Browse our selection of luxury vehicles, select your preferred model, and complete your booking.</p>
          </motion.div>

          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='w-[100%] bg-gradient-to-b from-white to-orange-100 p-4 flex flex-col gap-4 items-center'>
            <FaLocationDot size={32} style={{color: '#fa7602'}} />
            <h4 className='text-lg text-black text-center font-semibold'>Choose a Location</h4>
            <p className='text-[13px] text-black text-center'>Select your desired pick-up location from our wide network of convenient spots.</p>
          </motion.div>

          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className='w-[100%] bg-gradient-to-b from-white to-orange-100 p-4 flex flex-col gap-4 items-center'>
            <AiFillSchedule size={32} style={{color: '#fa7602'}}  />
            <h4 className='text-lg text-black font-semibold'>Pick A Date</h4>
            <p className='text-[13px] text-black text-center'>Choose the pick-up date that suits your schedule for a seamless rental experience.</p>
          </motion.div>
        </div>
    </div>
  )
}

export default HowItWorks