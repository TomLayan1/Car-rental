import React, { useContext } from 'react'
import { Ri24HoursLine } from "react-icons/ri";
import { RentalContext } from '../Context/Context'
import CartDetail from '../Component/CartDetail'
import Edit from '../Component/Edit'
import Payment from '../Component/Payment'

const Cart = () => {

  // DARKMODE FROM CONTEXT
  const { darkMode } = useContext(RentalContext)

  return (
    <section className={`px-6 md:px-16 lg:px-[100px] ${darkMode === 'dark' ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      <div>
        <h3></h3>
      </div>
      <CartDetail />
      <Edit />
      <Payment />
    </section>
  )
}

export default Cart