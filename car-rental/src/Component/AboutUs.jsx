import React from 'react'
import { motion } from 'framer-motion'
import blackSuv from '../Assets/Images/black-suv.png'

const AboutUs = () => {
  return (
    <div className='py-16 h-[100vh] overflow-hidden'>
      <motion.h2
        initial={{ translateY: 140, scale: 0.5 }}
        whileInView={{ translateY: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className='text-center text-3xl font-bold text-primaryColor mb-20'>About Us</motion.h2>
      <div className='flex items-center'>
        <motion.div
          initial={{ translateX: -400 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='w-[50%] max-h-[300px] flex items-center'>
          <img src={blackSuv} alt='black suv'/>
        </motion.div>
        <motion.div
          initial={{ translateX: 400 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='w-[50%] p-6'>
          <p className='text-[14px] mb-5'>
            Welcome to the premier destination for luxury car rentals. We pride ourselves on delivering an exceptional driving experience, combining elegance, comfort, and performance to meet the highest standards of our discerning clientele.
          </p>
          <button className='bg-gradient-to-tr from-orange-600 to-orange-200 flex items-center gap-1 px-8 py-2 text-[13px] text-white rounded-3xl rounded-tr-none'>LEARN MORE</button>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs