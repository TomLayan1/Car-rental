import React from 'react';
import { testimonials } from '../Data/rentalData';
import { IoStar } from "react-icons/io5";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// FROM SWIPER JS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Testimonial = () => {

  return (
    <section id='testimonials' className='py-20 lg:py-24 px-5 md:px-10 bg-black lg:flex overflow-hidden'>
      <motion.div
      initial={{ translateX: -300, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='lg:w-[40%] lg:pl-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-primaryColor mb-5'>What Our Clients Say</h2>
        <p className='text-white text-[14px] mb-10'>We pride ourselves on delivering exceptional experiences with our luxury vehicle rentals. But don’t just take our word for it. Hear what our satisfied clients have to say.</p>
      </motion.div>
      <motion.div
      initial={{ translateX: 300, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='w-full lg:w-[40%]  bg-white border border-primaryColor rounded-xl mx-auto shadow-customShadow'>
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
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className='text-[15px] w-full h-full px-6'>
                  <div className='flex gap-6 pt-3'>
                    <div className='w-[100px] h-[100px]'>
                      <img className='w-full h-full rounded-full' src={testimonial.userImage} alt={testimonial.userName} />
                    </div>
                    <div>
                      <p className='test-2xl font-bold text-black'>{testimonial.userName}</p>
                      <p className='test-2xl mb-2 text-black'>{testimonial.occupation}</p>
                      <div className='text-primaryColor flex'>
                        <IoStar size={18} />
                        <IoStar size={18} />
                        <IoStar size={18} />
                        <IoStar size={18} />
                        <IoStar size={18} />
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
            <span className='swiper-pagination-bullet'></span>
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonial;
