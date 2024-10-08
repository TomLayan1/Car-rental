import React from 'react'
import { motion } from 'framer-motion'
import blkMdCar from '../Assets/Images/dark-mode.png'



const Hero = () => {
  
  return (
    <section id='home' className='bg-orange-300 flex items-center h-[100vh] md:h-auto py-12 pb-16 md:py-20 md:pb-14 lg:py-36 lg:pb-36'>
      <div className='container flex items-center'>
        <div className='md:w-[50%] flex flex-col items-center md:items-start lg:pl-12'>
          <motion.h3
            initial={{ translateX: -300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-primaryColor text-3xl lg:text-5xl text-center px-6 md:px-0 md:text-left font-extrabold mb-11 md:mb-4'>Experience the Pinnacle of Elegance</motion.h3>
          <motion.p
            initial={{ translateX: -300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-lg text-center md:text-left text-black mb-11 md:mb-7 md:w-full lg:w-[80%]'
            >Discover an exquisite fleet of high-end vehicles, tailored for those who demand the best.</motion.p>
          
          <motion.button
            initial={{ translateX: -150, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='bg-primaryColor px-12 py-3 text-[15px] text-white rounded-md'><a href='#book' className='w-full h-full'>BOOK A CAR</a></motion.button>     
        </div>
        <div className='hidden md:block md:w-[50%]'>
          <motion.img
            initial={{scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2}}
            src={blkMdCar} alt='black car' />
        </div>
      </div>
    </section>
  )
}

export default Hero
