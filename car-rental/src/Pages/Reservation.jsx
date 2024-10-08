import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'

const Reservation = () => {
  // From Context
  const { darkMode, reservation } = useContext(RentalContext);

  
  return (
    <div className={`${darkMode === 'dark' ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500 container lg:w-[85%] mx-auto min-h-[100vh] py-6  md:py-8`}>
      <h1 className='mb-8 text-2xl md:text-3xl font-bold text-orange-600'>Reservations</h1>
        {reservation.length === 0 ?
        <div className='flex align-center justify-center h-[77vh]'>
          <p className='text-orange-600 place-self-center'>No reservation.</p>
        </div>
        : 
        <>
          {reservation.map(reservation => (
            <div key={reservation.id} className='w-full border-b border-b-gray-400 md:flex items-center mb-5'>
              <img src={reservation.carImage} alt={reservation.selectCar} className='w-[60%] md:w-[40%] lg:w-[20%]' />
              <div className='flex flex-col lg:flex-row gap-4 p-5 lg:w-[80%] text-[14px] md:text-[15px]'>
                <div className='lg:w-[50%]'>
                  <p className='mb-2'>{reservation.selectCar}</p>
                  <p>₦{reservation.rentPrice.toLocaleString()}</p>
                </div>
                <div className='flex md:flex-col lg:flex-row gap-4 lg:w-[50%]'>
                  <div className='w-[50%] md:w-full lg:w-[50%]'>
                    <p className='mb-1 font-bold text-orange-600'>PickUp</p>
                    <p className='mb-1'>{reservation.pickUp}</p>
                    <p>{reservation.pickUpDate}</p>
                  </div>
                  <div className='w-[50%] md:w-full lg:w-[50%]'>
                    <p className='mb-1 font-bold text-orange-600'>DropOff</p>
                    <p className='mb-1'>{reservation.dropOff}</p>
                    <p>{reservation.dropOffDate}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>} 
    </div>
  )
}

export default Reservation