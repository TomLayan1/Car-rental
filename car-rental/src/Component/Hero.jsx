import React from 'react'
import { motion } from 'framer-motion'
import blkMdCar from '../Assets/Images/dark-mode.png'

const Hero = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='w-[50%]'>
        <motion.h3
          initial={{ translateX: -300, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-primaryColor text-4xl font-extrabold mb-4'>Experience the Pinnacle of Elegance</motion.h3>
        <motion.p
          initial={{ translateX: -300, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='text-[15px] mb-5 w-[80%]'
          >Discover an exquisite fleet of high-end vehicles, tailored for those who demand the best.</motion.p>
        
        <motion.button
          initial={{ translateX: -150, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='bg-gradient-to-tr from-orange-600 to-orange-200 flex items-center px-8 py-2 text-[13px] text-white rounded-3xl rounded-tr-none'>BOOK A CAR</motion.button>     
      </div>
      <div className='w-[50%]'>
        <motion.img
          initial={{scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2}}
          src={blkMdCar} alt='black car' />
      </div>
    </div>
  )
}

export default Hero
