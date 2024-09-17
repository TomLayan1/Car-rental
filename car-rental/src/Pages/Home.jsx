import React, { useContext } from 'react'
import Hero from '../Component/Hero'
import Navbar from '../Component/Navbar'
import { RentalContext } from '../Context/Context'
import HowItWorks from '../Component/HowItWorks'
import AboutUs from '../Component/AboutUs'
import MobileApp from '../Component/MobileApp'
import Testimonial from '../Component/Testimonial'
import Book from '../Component/Book'
import Cars from '../Component/Cars'
import Contact from '../Component/Contact'

const Home = () => {
  // FROM CONTEXT
  const { darkMode } = useContext(RentalContext);
  
  return (
    <div className={` ${darkMode === 'dark' ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <hr />
      <Cars />
      <hr />
      <Book />
      <hr />
      <AboutUs />
      <Testimonial />
      <Contact />
      <MobileApp />
    </div>
  )
}

export default Home