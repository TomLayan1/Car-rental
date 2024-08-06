import React, { useContext, useState } from 'react'
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa'
import { IoSunnySharp } from "react-icons/io5";
import { RentalContext } from '../Context/Context';
import { motion } from 'framer-motion'

const Navbar = () => {

  // DARKMODE STATE FROM CONTEXT
  const { darkMode, setDarkMode } = useContext(RentalContext);

  // STATE TO SHOW MOBILE NAVBAR
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      {showNav && <div onClick={() => setShowNav(false)} className='fixed top-0 left-0 w-full h-[100vh] bg-grayBg'></div>}
      <div className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-[12px] md:px-[30px] lg:px-[100px] py-5 ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'} duration-500`}>
        <motion.h1
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='font-bold text-xl cursor-pointer text-primaryColor'>Drive<span className='font-thin text-grayLight'>Luxury</span></motion.h1>

        <motion.nav
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='hidden lg:flex lg:gap-6'>
          <li className='list-none text-[14px] cursor-pointer'>Home</li>
          <li className='list-none text-[14px] cursor-pointer'>About</li>
          <li className='list-none text-[14px] cursor-pointer'>Vehicle Models</li>
          <li className='list-none text-[14px] cursor-pointer'>Testimonials</li>
          <li className='list-none text-[14px] cursor-pointer'>Our Team</li>
          <li className='list-none text-[14px] cursor-pointer'>Contact</li>
        </motion.nav>

        <motion.div
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='flex gap-8 items-center justify-between'>
          <div className='hidden lg:flex'>
            <button className='w-[70px] text-[12px] py-1 text-primaryColor cursor-pointer'>Sign In</button>
            <button className='w-[70px] text-[12px] py-1 bg-gradient-to-tr from-orange-600 to-orange-200 text-white rounded-3xl rounded-tr-none cursor-pointer'>Register</button>
          </div>

          <div onClick={()=>setDarkMode(!darkMode)} className='text-primaryColor text-[18px] cursor-pointer'>
            { darkMode ? <IoSunnySharp style={{ color: 'white'}} /> : <FaMoon style={{ color: 'black'}} /> }
          </div>

          <div onClick={()=>setShowNav(!showNav)} className='text-primaryColor text-[18px] cursor-pointer lg:hidden'>
            { showNav ? <FaTimes /> : <FaBars /> }
          </div>
        </motion.div>

      </div>

      {/* For mobile devices */}
      <div className={`lg:hidden fixed top-[67px] right-0 h-[100vh] z-50 w-[70%] md:w-[50%] py-10 ${ showNav ? 'translate-x-0 duration-200' : 'translate-x-full duration-200'} ${darkMode ? 'bg-black duration-500' : 'bg-white duration-500'} ease-in-out`}>
        <div className='flex gap-7 mb-7 px-6'>
          <button className='bg-primaryColor text-white font-semibold px-3 py-1'>SIGN IN</button>
          <button className='bg-primaryColor text-white font-semibold px-3 py-1'>REGISTER</button>
        </div>
        <nav className={`w-full overflow-hidden flex flex-col gap-5 font-semibold px-6 ${darkMode ? 'text-primaryColor' : 'text-primaryColor'}`}>
          <motion.p
           initial={{translateX: 300, opacity: 0  }}
           animate={{ translateX: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.2 }}
           className='list-none'>HOME</motion.p>
          <motion.p
           initial={{translateX: 300, opacity: 0 }}
           animate={{ translateX: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.4 }}
           className='list-none'>ABOUT</motion.p>
          <motion.p
           initial={{translateX: 300, opacity: 0 }}
           animate={{ translateX: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.6 }}
           className='list-none'>VEHICLE MODELS</motion.p>
          <motion.p
           initial={{translateX: 300, opacity: 0 }}
           animate={{ translateX: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.8 }}
           className='list-none'>TESTIMONIAL</motion.p>
          <motion.p
           initial={{translateX: 300, opacity: 0 }}
           animate={{ translateX: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 1 }}
           className='list-none'>OUR TEAM</motion.p>
          <motion.p
           initial={{translateX: 300, opacity: 0 }}
           animate={{ translateX: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 1.2 }}
           className='list-none'>CONTACT</motion.p>
        </nav>
      </div>
    </>
  )
}

export default Navbar