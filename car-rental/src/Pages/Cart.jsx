import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'
import CartNav from '../Component/CartNav'
import CartDetail from '../Component/CartDetail'

const Cart = () => {

  // DARKMODE FROM CONTEXT
  const { darkMode } = useContext(RentalContext)

  return (
    <section className={`${darkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      <CartNav />
      <CartDetail />
    </section>
  )
}

export default Cart