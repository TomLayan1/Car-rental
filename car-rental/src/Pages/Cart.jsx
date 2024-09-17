import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RentalContext } from '../Context/Context'
import CartDetail from '../Component/CartDetail'
import Edit from '../Component/Edit'
import Payment from '../Component/Payment'

const Cart = () => {

  // DARKMODE FROM CONTEXT
  const { darkMode, notification, setNotification } = useContext(RentalContext)

  return (
    <section className={`container lg:w-[85%] mx-auto ${darkMode === 'dark' ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      {notification && <div className='bg-primaryColor text-white w-full fixed top-0 left-0 flex items-center text-[15px] mt-1 justify-between px-3 md:px-[30px] lg:px-[100px] py-[15px]'>
        <p className='text-center w-[88%] lg:w-[98%] text-[14px]'>{notification}</p>
        <FaTimes size={20} style={{ cursor: 'pointer' }} onClick={() => setNotification(null)} />
      </div>}

      <CartDetail />
      <Edit />
      <Payment />
    </section>
  )
}

export default Cart