import React, { useContext, useState } from 'react'
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa'
import { FaShoppingBag } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { RentalContext } from '../Context/Context';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Navbar = () => {

  // DARKMODE STATE FROM CONTEXT
  const { darkMode, setDarkMode, notification, setNotification } = useContext(RentalContext);

  // STATE TO SHOW MOBILE NAVBAR
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      {showNav && <div onClick={() => setShowNav(false)} className='fixed top-0 left-0 w-full h-[100vh] bg-grayBg'></div>}
      {notification && <div className={`bg-primaryColor text-white w-full fixed left-0 flex items-center text-[15px] mt-1 justify-between px-3 md:px-[30px] lg:px-[100px] py-[15px] ${notification ? 'top-16' : 'top-0'} duration-300`}>
        <p className='text-center w-[88%] lg:w-[98%]'>{notification}</p>
        <FaTimes size={20} style={{ cursor: 'pointer' }} onClick={() => setNotification(null)} />
      </div>}
      <div className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-[12px] md:px-[30px] lg:px-[100px] py-5 ${darkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
        <motion.h1
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='font-bold text-2xl cursor-pointer text-primaryColor'><a href='#home'>Drive<span className='text-grayLight'>Luxury</span></a></motion.h1>

        <motion.nav
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='hidden lg:flex lg:gap-6'>
          <a href='#home' className='list-none text-[14px] cursor-pointer'><li>Home</li></a>
          <a href='#about-us' className='list-none text-[14px] cursor-pointer'><li>About Us</li></a>
          <a href='#vahicle-models' className='list-none text-[14px] cursor-pointer'><li>Vehicle Models</li></a>
          <a href='#testimonials' className='list-none text-[14px] cursor-pointer'><li>Testimonials</li></a>
          <a href='#contact' className='list-none text-[14px] cursor-pointer'><li>Contact</li></a>
        </motion.nav>

        <motion.div
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='flex gap-8 items-center justify-between'>
          <div className='hidden lg:flex'>
            <button className='w-[70px] text-[12px] py-1 text-primaryColor cursor-pointer'>Sign In</button>
            <button className='w-[70px] text-[12px] py-1 bg-primaryColor text-white rounded-md cursor-pointer'>Register</button>
          </div>

          <div onClick={()=>setDarkMode(!darkMode)} className='text-primaryColor text-[18px] cursor-pointer'>
            { darkMode ? <IoSunnySharp style={{ color: 'white'}} /> : <FaMoon style={{ color: 'black'}} /> }
          </div>

          {/* ICON TO SEE CART */}
          <Link to={'/cart'}><FaShoppingBag size={20} style={{ color: '#fa7602', cursor: 'pointer' }} /></Link>

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
          <p onClick={() => setShowNav(false)} className='list-none'><a href='#home'>Home</a></p>
          <p onClick={() => setShowNav(false)} className='list-none'><a href='#about-us'>About Us</a></p>
          <p onClick={() => setShowNav(false)} className='list-none'><a href='#vehicle-models'>Vehicle Models</a></p>
          <p onClick={() => setShowNav(false)} className='list-none'><a href='#testimonials'>Testimonials</a></p>
          <p onClick={() => setShowNav(false)} className='list-none'><a href='#contact'>Contact</a></p>
        </nav>
      </div>
    </>
  )
}

export default Navbar