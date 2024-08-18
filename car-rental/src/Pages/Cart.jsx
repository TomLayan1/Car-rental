import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'
import CartDetail from '../Component/CartDetail'
import Test from '../Component/Test'

const Cart = () => {

  // DARKMODE FROM CONTEXT
  const { darkMode } = useContext(RentalContext)

  return (
    <section className={`px-6 md:px-16 lg:px-[100px] ${darkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'} duration-500`}>
      <CartDetail />
      <Test />
    </section>
  )
}

export default Cart