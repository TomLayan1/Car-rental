import React, { useContext } from 'react';
import { RentalContext } from '../Context/Context';
import { IoStar } from "react-icons/io5";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'



const Testimonial = () => {
  // FROM CONTEXT
  const { testimonial } = useContext(RentalContext);

  return (
    <section id='testimonials' className='py-20 lg:py-24 px-5 bg-black lg:flex'>
      <div className='lg:w-[40%] lg:pl-20'>
        <h2 className='text-3xl font-bold text-primaryColor mb-5'>What Our Clients Say</h2>
        <p className='text-white text-[14px] mb-10'>We pride ourselves on delivering exceptional experiences with our luxury vehicle rentals. But don’t just take our word for it. Hear what our satisfied clients have to say.</p>
      </div>
      <div className='w-full lg:w-[40%]  bg-white border border-primaryColor rounded-xl mx-auto shadow-customShadow'>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{ delay: 5000 }}
          slidesPerView='auto'
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }}
        >
          <div>
            {testimonial.map(testimonial => (
              <SwiperSlide key={testimonial.id} className=''>
                <div className='text-[15px] w-full h-full px-6'>
                  <div className='flex gap-6 pt-3'>
                    <div className='w-[120px] h-[120px]'>
                      <img className='w-full h-full rounded-full' src={testimonial.userImage} alt={testimonial.userName} />
                    </div>
                    <div>
                      <h3 className='test-2xl font-bold mb-2 text-black'>{testimonial.userName}</h3>
                      <div className='text-primaryColor flex'>
                        <IoStar size={20} />
                        <IoStar size={20} />
                        <IoStar size={20} />
                        <IoStar size={20} />
                        <IoStar size={20} />
                      </div>
                    </div>
                  </div>
                  <div className='py-8 w-[95%] mx-auto'>
                    <p className='text-center'>
                      <ImQuotesLeft size={22} style={{ display: 'inline-block', color: '#fa7602' }} /> 
                      <span className='px-2 text-black'>{testimonial.comment}</span>
                      <ImQuotesRight size={22} style={{ display: 'inline-block', color: '#fa7602' }} /></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className='swiper-pagination'>
            <span className='swiper-pagination-bullet swiper-pagination-bullet'></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
