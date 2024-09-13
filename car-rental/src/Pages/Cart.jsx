import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Ri24HoursLine } from "react-icons/ri";
import { RentalContext } from '../Context/Context'
import CartDetail from '../Component/CartDetail'
import Edit from '../Component/Edit'
import Payment from '../Component/Payment'

const Cart = () => {

  // DARKMODE FROM CONTEXT
  const { darkMode, notification, setNotification } = useContext(RentalContext)

  return (
    <section className={`px-6 md:px-16 lg:px-[100px] ${darkMode === 'dark' ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      {notification && <div className={`bg-primaryColor text-white w-full fixed left-0 flex items-center text-[15px] mt-1 justify-between px-3 md:px-[30px] lg:px-[100px] py-[15px] ${notification ? 'top-16' : 'top-0'} duration-300`}>
        <p className='text-center w-[88%] lg:w-[98%]'>{notification}</p>
        <FaTimes size={20} style={{ cursor: 'pointer' }} onClick={() => setNotification(null)} />
      </div>}

      <CartDetail />
      <Edit />
      <Payment />
    </section>
  )
}

export default Cart