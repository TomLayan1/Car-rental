import React, { useContext, useEffect } from 'react'
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { RentalContext } from '../Context/Context';
import Progress from './Progress';
import { cars } from '../Data/rentalData';

const Book = () => {

  // FROM CONTEXT
  const { booking, setBooking, rentalCart, setRentalCart, notification, setNotification, formNotification, setFormNotification } = useContext(RentalContext)

  // FUNCTION TO HANDLE RESERVATION
  const handleBooking = (e) => {
    setBooking(prev => {return { ...prev, [e.target.name]: e.target.value}});
  }

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setNotification(null), 3000);
    return () => clearTimeout(timer);
  }, [notification, setNotification])


  // Validate booking before submission
  const validateBooking = () => {
    if (!booking.selectCar || !booking.pickUp || !booking.dropOff || !booking.pickUpDate || !booking.dropOffDate) {
      setFormNotification('All fields are required');
      return false;
    }
    return true
  }

  // FUNCTION TO MAKE RESERVITION
  const addItemToCart = (e) => {
    e.preventDefault();

    // Validate before proceeding
    if (!validateBooking()) return;

    // Find selected car object based on the selected car name
    const selectedCar = cars.find(car => car.carName === booking.selectCar);

    // Check if the selected car has already been reserved
    const alreadyReserved = rentalCart.find(cart => cart.id === selectedCar.id);

    if (alreadyReserved) {
      setNotification('This car has been added to cart!')
      setBooking({
        selectCar: '',
        pickUp: '',
        dropOff: '',
        pickUpDate: '',
        dropOffDate: ''
      })
      return;
    }

    const newReservation = {
      id: selectedCar.id,
      carImage: selectedCar.carImage,
      rentPrice: selectedCar.rentPrice,
      selectCar: booking.selectCar,
      pickUp: booking.pickUp,
      dropOff: booking.dropOff,
      pickUpDate: booking.pickUpDate,
      dropOffDate: booking.dropOffDate
    }

    setRentalCart(prev => [...rentalCart, newReservation])
    setNotification('Successfully Added Item To Cart')
    setBooking({
      selectCar: '',
      pickUp: '',
      dropOff: '',
      pickUpDate: '',
      dropOffDate: ''
    })
  }

  
  return (
    <section id='book' className='py-12 pb-16 md:py-14 md:pb-14 lg:py-28 lg:pb-28'>
      <div className='container lg:w-[85%]'>
        <h1 className='text-3xl md:text-4xl text-primaryColor font-bold text-center mb-4'>Drive Your Dream Today</h1>
        <p className=' md:text-lg text-center mb-6 lg:w-[60%] mx-auto'>Select Your Luxury Ride and Reserve It Now! Limited Availability, Book Your Experience Before It's Gone!</p>

        {/* Progress component */}
        <Progress />

        {formNotification && <p className='text-red-700 mb-3'>{formNotification}*</p>}
        <form className='text-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8' onSubmit={addItemToCart}>
          <div className=''>
            <div className='flex items-center gap-2  mb-2'>
              <FaCar size={20} style={{ color: '#fa7602'}} />
              <p>Select car Type</p>
            </div>
            <select
            name='selectCar'
            value={booking.selectCar}
            onChange={handleBooking}
            className='w-full text-[15px] px-2 py-3 border bg-orange-50 border-primaryColor rounded-md outline-none  text-black'>
              <option>Selct car</option>
              {cars.map(car => (
                <option key={car.carName} value={car.carName}>{car.carName}</option>
              ))}
            </select>
          </div>

          <div className=''>
            <div className='flex items-center gap-2 mb-2'>
              <FaLocationDot size={20} style={{ color: '#fa7602'}} />
              <p>Pickup Location</p>
            </div>
            <input
            type='text'
            name='pickUp'
            value={booking.pickUp}
            onChange={handleBooking}
            placeholder='Location Here'
            className='w-full text-[15px] px-2 py-3 bg-orange-50 border border-primaryColor rounded-md outline-none text-black' />
          </div>

          <div className=''>
            <div className='flex items-center gap-2 mb-2'>
              <FaLocationDot size={20} style={{ color: '#fa7602'}} />
              <p>Dropoff Location</p>
            </div>
            <input 
            type='text'
            name='dropOff'
            value={booking.dropOff}
            onChange={handleBooking}
            placeholder='Location Here' className='w-full text-[15px] px-2 py-3 bg-orange-50 border border-primaryColor rounded-md outline-none text-black' />
          </div>

          <div className=''>
            <div  className='flex items-center gap-2 mb-2'>
              <MdDateRange size={20} style={{ color: '#fa7602'}} />
              <p>Pickup Date</p>
            </div>
            <input
            type='date'
            name='pickUpDate'
            value={booking.pickUpDate}
            onChange={handleBooking}
            className='w-full text-[15px] px-2 py-3  bg-orange-50 border border-primaryColor rounded-md outline-none  text-black' />
          </div>
          <div className=''>
            <div  className='flex items-center gap-2 mb-2'>
              <MdDateRange size={20} style={{ color: '#fa7602'}} />
              <p>Dropoff Date</p>
            </div>
            <input 
            type='date'
            name='dropOffDate'
            value={booking.dropOffDate}
            onChange={handleBooking}
            className='w-full text-[15px] px-2 py-3 bg-orange-50 border border-primaryColor rounded-md outline-none  text-black' />
          </div>

            <button className='bg-primaryColor text-white rounded-md h-[49px] mt-8' type='submit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Book