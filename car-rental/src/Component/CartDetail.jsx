import React, { useContext } from 'react'
import Reservation from './Reservation';
import RateQuote from './RateQuote';
import { RentalContext } from '../Context/Context';


const CartDetail = () => {
  const { showEditPage } = useContext(RentalContext);
  return (
    <section>
      {showEditPage && <div className='fixed top-0 left-0 w-full h-[100vh] bg-grayBg'></div>}
      <div className='mx-auto flex flex-col lg:flex-row gap-8 py-10 lg:text-[15px]'>
        <Reservation />
        <RateQuote />
      </div>
    </section>
  )
}

export default CartDetail