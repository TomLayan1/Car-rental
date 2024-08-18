import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'
import { motion } from 'framer-motion'

const Cars = () => {
  // FROM CONTEXT
  const { luxCars } = useContext(RentalContext);

  return (
    <section id='vahicle-models' className='py-20'>
      <h2 className='text-3xl md:text-4xl text-primaryColor text-center font-extrabold mb-5'>Our Fleet Of Cars</h2>
      <p className='text-lg text-center mb-20 md:w-[60%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus</p>

      <div
      className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-11 lg:w-[80%] mx-auto'>
        {luxCars.map(car => (
          <motion.div
          initial={{ translateY: 200 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
          key={car.id}
          className='shadow-customShadow p-2'>
            <h3 className='text-xl text-end font-bold text-primaryColor'>₦{(car.rentPrice / 100).toFixed(2)}</h3>
            <div className='p-2 max-h-[200px] flex'>
              <img src={car.carImage} alt={car.carName} />
            </div>
            <p className='text-center lg:text-[15px] mt-5 font-semibold'>{car.carName}</p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Cars