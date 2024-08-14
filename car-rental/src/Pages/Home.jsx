import React, { useContext } from 'react'
import Hero from '../Component/Hero'
import Navbar from '../Component/Navbar'
import Contact from '../Component/Contact'
import { RentalContext } from '../Context/Context'
import HowItWorks from '../Component/HowItWorks'
import AboutUs from '../Component/AboutUs'
import MobileApp from '../Component/MobileApp'
import Testimonial from '../Component/Testimonial'
import Book from '../Component/Book'
import Cars from '../Component/Cars'

const Home = () => {
  // FROM CONTEXT
  const { darkMode } = useContext(RentalContext);
  
  return (
    <div className={`${darkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      <Hero />
      <Contact />
      <Navbar />
      <div className='px-6 md:px-16 lg:px-[100px]'>
        <HowItWorks />
        <Book />
        <Cars />
        <AboutUs />
      </div>
      <Testimonial />
      <div className='px-10 md:px-24 lg:px-100'>
        <MobileApp />
      </div>
      <hr className='mt-8' />
    </div>
  )
}

export default Home