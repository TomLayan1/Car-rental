import React from 'react'
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='p-6 md:px-14 lg:px-[100px]'>
      <h1 className='font-bold text-2xl cursor-pointer text-primaryColor mb-6'>Drive<span className=' text-grayLight'>Luxury</span></h1>
      <div className='text-[15px] mb-10 md:flex gap-20 lg:gap-40'>
        <div className='mb-8 w-full md:w-[40%]'>
          <p className='mb-6'>Discover the ultimate in luxury vehicle rentals. Our commitment to excellence ensures every journey is unforgettable. Follow us on social media for the latest updates and exclusive offers.</p>
          <p className='text-primaryColor text-justify'>CALL CENTER: +397 256 38 29</p>
        </div>
        <div className='w-[65%]'>
          <div className='lg:flex md:gap-14 lg:gap-40'>
            <div>
              <h2 className='text-xl font-extrabold text-primaryColor mb-5'>Quick Link</h2>
              <p className='mb-3'>How work</p>
              <p className='mb-3'>FAQ</p>
              <p className='mb-3'>Services</p>
              <p className='mb-3'>Contact</p>
            </div>
            <div>
              <p className='text-primaryColor mb-6'>official_driveluxury@gmail.com</p>
              <div className='text-primaryColor flex gap-3 md:gap-5'>
                <FaInstagram size={20} />
                <FaFacebookSquare size={20} />
                <FaXTwitter size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
        <hr className='mb-2'/>
        <p className='text-[13px] text-center'>&#169;2024 Kode Design. All Right Reserved</p>
    </footer>
  )
}

export default Footer