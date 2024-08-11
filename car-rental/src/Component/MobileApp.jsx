import React from 'react'
import { motion } from 'framer-motion'
import phone from '../Assets/Images/phone.png'
import playStore from '../Assets/Images/play-store.png'
import appStore from '../Assets/Images/app-store.png'

const MobileApp = () => {
  return (
    <div className='hidden h-[100vh] lg:flex items-center justify-center'>
      <motion.div
        initial={{ translateY: 100, scale: 0.5 }}
        whileInView={{ translateY: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        className='w-full h-[73vh] flex items-center justify-center relative'>
        <div className='h-[300px] w-full bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 rounded-xl shadow-customShadow flex'>
          <div className='py-6 pl-20 w-[50%] flex flex-col'>
            <div className='text-white'>
              <h4 className='text-2xl font-bold mb-3'>Get Our Mobile App!</h4>
              <ul className='text-[14px] flex flex-col gap-3 mb-3'>
                <li><span className='font-bold'>Easy Booking:</span> Reserve your dream car in just a few taps</li>
                <li><span className='font-bold'>Exclusive Offers:</span> Enjoy app-only deals and promotions</li>
                <li><span className='font-bold'>24/7 Support:</span> Access customer service anytime, anywhere.</li>
                <li><span className='font-bold'>Real-Time Updates:</span> Stay informed with instant notifications and updates.</li>
              </ul>
            </div>
            <div className='flex items-center pl-10'>
              <img className='w-[150px] h-[100%]' src={playStore} alt='play stor' />
              <img className='w-[150px] h-[100%]' src={appStore} alt='app store' />
            </div>
          </div>
          <div className='absolute top-0 right-36 h-[100%]'>
            <img className='w-[250px] h-[100%]' src={phone} alt='mobile phone' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileApp