import React, { useContext } from 'react'
import praise from '../Assets/Images/praise.jpeg'
import { RentalContext } from '../Context/Context'
import test from '../Assets/Images/praise.jpeg'
import { IoStar } from "react-icons/io5";
import { FaQuoteRight } from "react-icons/fa";
// <FaQuoteRight />


const Testimonial = () => {

  // FROM CONTEXT
  const { testimonial } = useContext(RentalContext);

  return (
    <section className='h-[100vh] bg-orange-10 pt-16 px-5'>
      <h2 className='text-center text-3xl font-bold text-primaryColor mb-5'>Testimonials</h2>
      <p className='w-[60%] m-auto text-center text-[14px] mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh.</p>
      {testimonial.map( (testimonial, index) => (
        <div className='w-[50%] h-[48vh] bg-gradient-to-b from-orange-600 via-orange-400 to-orange-600 rounded-xl m-auto shadow-customShadow flex'>
          <div className='w-[30%] h-full rounded-tl-xl rounded-bl-xl'>
            <img className='w-full h-full rounded-tl-xl rounded-bl-xl' src={testimonial.userImage} alt='Praise' />
          </div>
          <div className='w-[70%] h-full text-orange-100 flex flex-col justify-between p-4'>
            <h3 className='text-xl font-bold'>{testimonial.userName}</h3>
            <p className='text-[14px]'>{testimonial.comment}</p>
            <img />
            <div className='flex text-orangge-100'>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Testimonial