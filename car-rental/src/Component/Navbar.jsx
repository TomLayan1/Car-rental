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
      {showNav && <div onClick={() => setShowNav(false)} className='fixed top-[67px] left-0 w-full h-[100vh] bg-grayBg'></div>}
      {notification && <div className='bg-primaryColor text-white w-full fixed top-0 left-0 flex items-center text-[15px] mt-1 justify-between px-3 md:px-[30px] lg:px-[100px] py-[15px]'>
        <p className='text-center w-[88%] lg:w-[98%]'>{notification}</p>
        <FaTimes size={20} style={{ cursor: 'pointer' }} onClick={() => setNotification(null)} />
      </div>}
      <div className={`w-full lg:w-[99.6%] border-b lg:fixed top-0 left-0 z-50 flex items-center justify-between px-[12px] md:px-[30px] lg:px-[100px] py-5 ${darkMode === 'dark' ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
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
          <a href='#vahicle-models' className='list-none text-[14px] cursor-pointer'><li>Vehicle Models</li></a>
          <a href='#about-us' className='list-none text-[14px] cursor-pointer'><li>About Us</li></a>
          <a href='#testimonials' className='list-none text-[14px] cursor-pointer'><li>Testimonials</li></a>
          <a href='#contact' className='list-none text-[14px] cursor-pointer'><li>Contact</li></a>
        </motion.nav>

        <motion.div
         initial={{ translateY: -50, opacity: 0 }}
         animate={{ translateY: 0, opacity: 1 }}
         transition={{ duration: 1.5 }}
         className='flex gap-8 items-center justify-between'>

          <div className='text-primaryColor text-[18px] cursor-pointer'>
            { darkMode === 'dark' ? <IoSunnySharp onClick={()=>setDarkMode('light')} style={{ color: 'white'}} /> : <FaMoon onClick={()=>setDarkMode('dark')} style={{ color: 'black'}} /> }
          </div>

          {/* ICON TO SEE CART */}
          <Link to={'/cart'}><FaShoppingBag size={20} style={{ color: '#fa7602', cursor: 'pointer' }} /></Link>

          <div onClick={()=>setShowNav(!showNav)} className='text-primaryColor text-[18px] cursor-pointer lg:hidden z-50'>
            { showNav ? <FaTimes /> : <FaBars /> }
          </div>
        </motion.div>

      </div>

      {/* For mobile devices */}
      <div className={`lg:hidden fixed top-[67px] right-0 h-[100vh] z-40 w-full md:w-[50%] py-10 ${ showNav ? 'translate-x-0 duration-200' : 'translate-x-full duration-200'} ${darkMode === 'dark' ? 'bg-black duration-500' : 'bg-white duration-500'} ease-in-out`}>
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