import React, { useContext, useState, useEffect } from 'react'
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { RentalContext } from '../Context/Context';
import api from '../Axios/BaseURL';

const Book = () => {

  // FROM CONTEXT
  const {
    luxCars,
    booking,
    setBooking,
    reservation,
    setReservation,
    notification,
    setNotification,
    formNotification,
    setFormNotification
  } = useContext(RentalContext)

  // FUNCTION TO HANDLE RESERVATION
  const handleBooking = (event) => {
    setBooking(prev => {return { ...prev, [event.target.name]: event.target.value}});
  }

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setNotification(null), 3000);
    return () => clearTimeout(timer);
  }, [notification])


  // Validate booking before submission
  const validateBooking = () => {
    if (!booking.selectCar || !booking.pickUp || !booking.dropOff || !booking.pickUpDate || !booking.dropOffDate) {
      setFormNotification('All fields are required');
      return false;
    }
    return true
  }

  // FUNCTION TO MAKE RESERVITION
  const makeReservation = async (event) => {
    event.preventDefault();

    // Validate before proceeding
    if (!validateBooking()) return;

    // Find selected car object based on the selected car name
    const selectedCar = luxCars.find(car => car.carName === booking.selectCar);

    // Handle case where the selected car is not found
    if (!selectedCar) {
      setNotification('Selected car not found! Please choose a valid car.');
      return;
    }

    // Check if the selected car has already been reserved
    const alreadyReserved = reservation.some(reserved => reserved.id === selectedCar.id);

    if (alreadyReserved) {
      setNotification('This car has already been added to you reservation!')
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

    try {
      const response = await api.post('/bookings', newReservation);
      const allReservations = [...reservation, response.data];
      setReservation(allReservations)
      setNotification('Successfully Made Reservation')
      setBooking({
        selectCar: '',
        pickUp: '',
        dropOff: '',
        pickUpDate: '',
        dropOffDate: ''
      })
    } catch (err) {
      console.log(err)
      setNotification('Error making reservation, please try again.')
    }
  }

  
  return (
    <section id='book' className='w-full lg:w-[90%] mx-auto py-9 md:py-12 lg:py-16'>

      <h1 className='text-3xl md:text-4xl text-primaryColor font-bold text-center mb-4'>Drive Your Dream Today</h1>
      <p className='text-[15px] text-center mb-16 lg:w-[60%] mx-auto'>Select Your Luxury Ride and Reserve It Now! Limited Availability, Book Your Experience Before It's Gone!</p>


      {formNotification && <p className='text-red-700 mb-3'>{formNotification}*</p>}
      <form className='text-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8' onSubmit={makeReservation}>
        <div className=''>
          <div className='flex items-center gap-2  mb-2'>
            <FaCar size={20} style={{ color: '#fa7602'}} />
            <p>Select car Type</p>
          </div>
          <select
          name='selectCar'
          value={booking.selectCar}
          onChange={handleBooking}
          className='w-full text-[15px] p-2 border bg-orange-50 border-primaryColor outline-0  text-black'>
            <option>Selct car</option>
            {luxCars.map(car => (
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
          className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0 text-black' />
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
          placeholder='Location Here' className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0 text-black' />
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
          className='w-full text-[15px] p-2  bg-orange-50 border border-primaryColor outline-0  text-black' />
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
          className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0  text-black' />
        </div>

          <button className='bg-primaryColor text-white h-[45px] mt-7'>Submit</button>
      </form>
    </section>
  )
}

export default Book