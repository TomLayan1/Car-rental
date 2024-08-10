import React, { useContext } from 'react';
import { RentalContext } from '../Context/Context';
import { IoStar, IoStarHalfSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonial = () => {
  // FROM CONTEXT
  const { testimonial } = useContext(RentalContext);

  return (
    <section className='h-[100vh] bg-orange-10 pt-20 px-5'>
      <h2 className='text-center text-3xl font-bold text-primaryColor mb-5'>Testimonials</h2>
      <p className='w-[60%] m-auto text-center text-[14px] mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh.</p>
      <div className=''>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        >
        
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
