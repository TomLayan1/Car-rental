import React, { useContext } from 'react'
import Hero from '../Component/Hero'
import { RentalContext } from '../Context/Context'
import HowItWorks from '../Component/HowItWorks'
import AboutUs from '../Component/AboutUs'
import MobileApp from '../Component/MobileApp'
import Testimonial from '../Component/Testimonial'
import Book from '../Component/Book'

const Home = () => {
  // FROM CONTEXT
  const { darkMode } = useContext(RentalContext)
  return (
    <div className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'} duration-500`}>
      <Hero />
      <div className='px-6 md:px-16 lg:px-[100px]'>
        <HowItWorks />
        <Book />
        <AboutUs />
      </div>
      <Testimonial />
      <div className='px-10 md:px-24 lg:px-100'>
        <MobileApp />
      </div>
    </div>
  )
}

export default Home