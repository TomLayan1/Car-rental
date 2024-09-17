import React from 'react';
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id='contact' className='bg-orange-100 py-12 pb-16 md:py-14 md:pb-14 lg:py-28 lg:pb-28 overflow-hidden'>
      <div className='container lg:flex flex-row-reverse justify-between lg:w-[85%]'>
        <motion.div
        initial={{ translateX: 300, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='w-full md:w-[80%] mx-auto lg:w-[40%] mb-14'>
          <h3 className='text-4xl text-primaryColor font-bold text-center lg:text-left'>Let's Drive With Rent Today</h3>
        </motion.div>
        <motion.div
        initial={{ translateX: -300, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='w-full md:w-[80%] mx-auto lg:w-[40%]'>
          <form>
            <div className='flex flex-col lg:flex-row gap-4 mb-4'>
              <input type='text' placeholder='First Name' className='border border-primaryColor w-full p-2 text-[15px] rounded-md outline-none' />
              <input type='text' placeholder='Last Name' className='border border-primaryColor w-full p-2 text-[15px] rounded-md outline-none' />
            </div>
            <div className='flex flex-col lg:flex-row gap-4 mb-4'>
              <input type='email' placeholder='Email' className='border border-primaryColor w-full p-2 text-[15px] rounded-md outline-none' />
              <input type='telephone' placeholder='Phone' className='border border-primaryColor w-full p-2 text-[15px] rounded-md outline-none' />
            </div>
            <textarea placeholder='Message'  className='h-[130px] border border-primaryColor w-full mb-4 px-2 py-3 text-[15px] rounded-md outline-none' />
            <button className='bg-primaryColor w-full py-3 text-white rounded-md'>Submit</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact