import React, { useContext } from 'react'
import Hero from '../Component/Hero'
import { RentalContext } from '../Context/Context'
import HowItWorks from '../Component/HowItWorks'
import AboutUs from '../Component/AboutUs'
import MobileApp from '../Component/MobileApp'
import Testimonial from '../Component/Testimonial'

const Home = () => {
  // FROM CONTEXT
  const { darkMode } = useContext(RentalContext)
  return (
    <div className={`px-10 md:px-24 lg:px-100 ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
      <Hero />
      <HowItWorks />
      <AboutUs />
      <Testimonial />
      <MobileApp />
    </div>
  )
}

export default Home