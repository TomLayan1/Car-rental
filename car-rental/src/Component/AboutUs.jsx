import React from 'react'
import { motion } from 'framer-motion'
import blackSuv from '../Assets/Images/black-suv.png'

const AboutUs = () => {
  return (
    <section id='about-us' className='py-24 overflow-hidden'>
      <motion.h2
        initial={{ translateY: 140, scale: 0.5 }}
        whileInView={{ translateY: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className='text-center text-3xl font-bold text-primaryColor mb-10'>About Us</motion.h2>
      <div className='flex items-center'>
        <motion.div
          initial={{ translateX: -250 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='hidden lg:w-[50%] max-h-[300px] lg:flex lg:items-center'>
          <img src={blackSuv} alt='black suv'/>
        </motion.div>
        <motion.div
          initial={{ translateX: 250 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='w-full lg:w-[50%] p-6'>
          <p className='text-[14px] mb-5 text-justify'>
            Welcome to DriveLux, where luxury and exceptional service drive our passion. We are dedicated to providing you with an extraordinary experience, offering an exclusive collection of the finest vehicles available for rent. Whether you're celebrating a special occasion, planning a getaway, or simply indulging in the thrill of the open road, we have the perfect vehicle to match your desires.
            <br/>
            <br/>
            At DriveLux, we believe that every journey should be as remarkable as the destination. That’s why we go above and beyond to ensure that every detail of your rental experience is flawless. From the moment you select your vehicle to the time you return it, our team is committed to making your experience seamless and unforgettable.
            <br/>
            <br/>
            With a focus on excellence and customer satisfaction, we have earned a reputation as a leader in luxury vehicle rentals. Our mission is to provide you with not just a car, but an experience that embodies elegance, sophistication, and the joy of driving.
            <br/>
            <br/>
            Thank you for choosing us. We are excited to be part of your next adventure.
          </p>
          {/* <button className='bg-gradient-to-tr from-orange-600 to-orange-200 flex items-center gap-1 px-8 py-2 text-[13px] text-white rounded-3xl rounded-tr-none'>LEARN MORE</button> */}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs