import React, { useContext } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { RentalContext } from '../Context/Context';


const EditPage = () => {
  // FROM CONTEXT
  const { editBooking, setEditBooking } = useContext(RentalContext)
  
  const handleEditing = (e) => {
    setEditBooking(prev => {return {...prev, [e.target.name]: e.target.value }})
  }

  return (
    <div>
      <form className='text-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        <div className=''>
          <div className='flex items-center gap-2 mb-2'>
            <FaLocationDot size={20} style={{ color: '#fa7602'}} />
            <p>Pickup Location</p>
          </div>
          <input
          type='text'
          name='pickUp'
          value={editBooking.pickUp}
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
          value={editBooking.dropOff}
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
          value={editBooking.pickUpDate}
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
          value={editBooking.dropOffDate}
          onChange={handleEditing}
          className='w-full text-[15px] p-2 bg-orange-50 border border-primaryColor outline-0  text-black' />
        </div>

          <button className='bg-primaryColor text-white h-[45px] mt-7' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditPage