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
    <section id='testimonials' className='bg-orange-10 py-20 px-5 bg-black lg:flex'>
      <div className='lg:w-[40%] lg:pl-20'>
        <h2 className='text-3xl font-bold text-primaryColor mb-5'>Testimonials</h2>
        <p className='text-white text-[14px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh.</p>
      </div>
      <div className='w-full lg:w-[40%]  bg-white mx-auto shadow-customShadow'>
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
                      <h3 className='test-2xl font-bold mb-2'>{testimonial.userName}</h3>
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
                      <ImQuotesLeft size={20} style={{ display: 'inline-block'}} /> 
                      <span className='px-1'>{testimonial.comment}</span>
                      <ImQuotesRight size={20} style={{ display: 'inline-block'}} /></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className='swiper-pagination'>
            <span className='swiper-pagination-bullet bg-primaryColor'></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
