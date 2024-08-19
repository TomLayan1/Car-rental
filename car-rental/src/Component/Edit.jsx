import React, { useContext } from 'react'
import { FaCar, FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { RentalContext } from '../Context/Context';
import { cars } from '../Data/rentalData';

const Edit = () => {
  // FROM CONTEXT
  const {
    showEditPage,
    setShowEditPage,
    darkMode,
    setRentalCart,
    editReservation,
    setEditReservation,
  } = useContext(RentalContext);

  const handleEditing = (e) => {
    e.preventDefault();
    setEditReservation(prev => {return {...prev, [e.target.name]: e.target.value }})
  }


  const EditReservation = (id) => {
    // Find selected car object based on the selected car name
    const selectedCar = cars.find(car => car.carName === editReservation.selectCar);

    const updatedReservation = {
      id: id,
      carImage: selectedCar.carImage,
      rentPrice: selectedCar.rentPrice,
      selectCar: editReservation.selectCar,
      pickUp: editReservation.pickUp,
      dropOff: editReservation.dropOff,
      pickUpDate: editReservation.pickUpDate,
      dropOffDate: editReservation.dropOffDate
    }

    // Update the reservation state with the edited reservation
    setRentalCart(prevCart => prevCart.map(reservation => reservation.id === id ? updatedReservation : reservation))
    setEditReservation({
      id: '',
      selectCar: '',
      pickUp: '',
      dropOff: '',
      pickUpDate: '',
      dropOffDate: ''
    })
    // Close the edit page after submission
    setShowEditPage(false)
  }
  
  return (
    <div className={`bg-white w-full lg:w-[36%] fixed h-[100vh] top-0 left-0 py-6 px-10 ${ showEditPage ? 'translate-x-0 duration-200' : '-translate-x-full duration-200'} ease-in-out  ${darkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'}`}>
      <div className='mb-7 flex items-center justify-between'>
        <h4 className='text-2xl text-center font-bold text-primaryColor'>Edit Details</h4>
        <FaTimes size={19} style={{ color: 'grey', cursor: 'pointer'}} onClick={() => setShowEditPage(false)} />
      </div>
      <form className='text-[15px] grid grid-cols-1 gap-4 md:gap-4'>
        <div className=''>
          <div className='flex items-center gap-2  mb-2'>
            <FaCar size={20} style={{ color: '#fa7602'}} />
            <p>Select car Type</p>
          </div>
          <select
          name='selectCar'
          value={editReservation.selectCar}
          onChange={handleEditing}
          className='w-full text-[15px] p-2 border bg-orange-50 border-primaryColor outline-0  text-black'>
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
          value={editReservation.pickUp}
          onChange={handleEditing}
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
          value={editReservation.dropOff}
          onChange={handleEditing}
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
          value={editReservation.pickUpDate}
          onChange={handleEditing}
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
          value={editReservation.dropOffDate}
          onChange={handleEditing}
          className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0  text-black' />
        </div>
          <button className='bg-primaryColor text-white h-[45px] mt-4' type='submit' onClick={(e) => EditReservation(editReservation.id)} >Change</button>
      </form>
    </div>
  )
}

export default Edit