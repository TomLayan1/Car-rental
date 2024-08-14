import React from 'react'
import Reservation from './Reservation';
import RateQuote from './RateQuote';


const CartDetail = () => {
  return (
    <section className='mx-auto flex flex-col lg:flex-row gap-8 py-10 lg:text-[15px]'>
      <Reservation />
      <RateQuote />
    </section>
  )
}

export default CartDetail