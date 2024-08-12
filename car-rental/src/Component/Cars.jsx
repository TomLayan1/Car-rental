import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'
import { motion } from 'framer-motion'

const Cars = () => {
  // FROM CONTEXT
  const { luxCars } = useContext(RentalContext);

  return (
    <section id='vahicle-models' className='py-20'>
      <h2 className='text-3xl md:text-4xl text-primaryColor text-center font-extrabold mb-5'>Book A Car</h2>
      <p className='text-[15px] text-center mb-20 md:w-[60%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus</p>

      <div
      className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-11 lg:w-[80%] mx-auto'>
        {luxCars.map(car => (
          <motion.div
          initial={{ translateY: 200 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
          key={car.id}
          className='shadow-customShadow p-3'>
            <h3 className='text-2xl font-bold text-primaryColor'>${car.rentPrice}</h3>
            <div className='p-2 h-[184px] lg:h-[150px]'>
              <img src={car.carImage} alt={car.carName} />
            </div>
            <p className='text-center lg:text-[15px] my-5'>{car.carName}</p>
            <button className='w-full bg-primaryColor text-white py-2'>RESERVE</button>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Cars