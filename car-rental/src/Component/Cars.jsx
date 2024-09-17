import React from 'react'
import { cars } from '../Data/rentalData'
import { motion } from 'framer-motion'

const Cars = () => {

  return (
    <section id='vahicle-models' className='py-12 pb-16 md:py-20 md:pb-14 lg:py-28 lg:pb-28'>
      <div className='container lg:w-[85%]'>
        <h2 className='text-3xl md:text-4xl text-primaryColor text-center font-extrabold mb-5'>Our Fleet Of Cars</h2>
        <p className='md:text-lg text-center mb-20 md:w-[80%] mx-auto'>Explore our exceptional collection of luxury vehicles, meticulously selected to deliver unparalleled performance and style.</p>

        <div
        className='w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-11'>
          {cars.map(car => (
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.5 }}
            key={car.id}
            className='shadow-customShadow p-2'>
              <h3 className='text-xl text-end font-bold text-primaryColor'>₦{car.rentPrice.toLocaleString()}</h3>
              <div className='p-2 max-h-[200px] flex'>
                <img src={car.carImage} alt={car.carName} />
              </div>
              <p className='text-center lg:text-[15px] mt-5 font-semibold'>{car.carName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cars