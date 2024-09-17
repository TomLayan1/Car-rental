import React, { useContext, useEffect, useRef } from 'react'
import { FaPen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { RentalContext } from '../Context/Context';
import lottie from 'lottie-web';

const CartSummary = () => {

  // FROM CONTEXT
  const { rentalCart, deleteCartItem, handleEditReservation } = useContext(RentalContext);

  const emptyCart = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: emptyCart.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../emptyCart.json')
    })

    // Cleanup to prevent multiple animation
    return () => {
     lottie.destroy(); 
    }
  }, [])



  return (
    <div className='flex flex-col lg:w-[70%] gap-10 min-h-[45vh] lg:min-h-[55vh]'>
      {rentalCart.length === 0 ? 
      <div className='w-full h-full flex items-center justify-center'> 
        <div ref={emptyCart} className='w-[50%] place-self-center'></div>
      </div>
      :
      rentalCart.map(rentalCart => (
          <div key={rentalCart.id} className='flex flex-col md:flex-row justify-between'>

            {/* SELETED CAR */}
            <div className='border border-gray-300 md:w-[30%] shadow-customShadow'>
              <h3 className='font-bold text-black bg-gray-300 py-1 px-2'>Selected Vehicle</h3>
              <div className='p-2'>
                <img src={rentalCart.carImage} alt={rentalCart.selectCar} className='mb-3 w-[250px' />
                <div className='fle items-center justify-between'>
                  <p className='font-semibold'>{rentalCart.selectCar}</p>
                  <h5 className='text-primaryColor text-base font-semibold'>₦{rentalCart.rentPrice.toLocaleString()}</h5>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className='border border-gray-300 md:w-[64%] lg:w-[65%] lg:h-[220px] shadow-customShadow text-[15px]'>
              <h3 className='font-bold text-black bg-gray-300 py-1 px-2'>Your Detail</h3>
              <div className=' p-2'>
                <div className='md:flex flex-wrap '>
                  <div className='mb-4 md:w-[50%]'>
                    <div className='flex items-center gap-1 mb-2'>
                      <FaLocationDot size={16} style={{ color: '#fa7602'}} />
                      <p className='font-bold'>Pickup Location</p>
                    </div>
                    <p className='pl-6 text-[14px] md:text-base'>{rentalCart.pickUp}</p>
                  </div>
                  <div className='mb-4 md:w-[50%]'>
                    <div className='flex items-center gap-1 mb-2'>
                      <MdDateRange size={16} style={{ color: '#fa7602'}} />
                      <p className='font-bold'>Pickup Date</p>
                    </div>
                    <p className='pl-6 text-[14px] md:text-base'>{rentalCart.pickUpDate}</p>
                  </div>
                  <div className='mb-4 md:w-[50%]'>
                    <div className='flex items-center gap-1 mb-2'>
                      <FaLocationDot size={16} style={{ color: '#fa7602'}} />
                      <p className='font-bold'>Dropoff Location</p>
                    </div>
                    <p className='pl-6 text-[14px] md:text-base'>{rentalCart.dropOff}</p>
                  </div>
                  <div className='mb-4 md:w-[50%]'>
                    <div className='flex items-center gap-1 mb-2'>
                      <MdDateRange size={16} style={{ color: '#fa7602' }} />
                      <p className='font-bold'>Dropoff Date</p>
                    </div>
                    <p className='pl-6 text-[14px] md:text-base'>{rentalCart.dropOffDate}</p>
                  </div>
                </div>
                <hr className='mb-3'/>
                <div className='flex justify-between mb-2'>
                  <div className='flex items-center gap-1 cursor-pointer mb-2'>
                    <FaPen size={16} style={{ color: '#fa7602' }} />
                    <p className='font-bold underline' onClick={()=>handleEditReservation(rentalCart.id)}>Edit</p>
                  </div>
                  <TiDelete size={24} style={{ color: 'red',cursor: 'pointer'}} onClick={() => deleteCartItem(rentalCart.id)} />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartSummary