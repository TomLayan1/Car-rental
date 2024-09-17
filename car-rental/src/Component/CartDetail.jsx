import React, { useContext } from 'react'
import CartSummary from './CartSummary';
import RateQuote from './RateQuote';
import { RentalContext } from '../Context/Context';
import { Link } from 'react-router-dom';


const CartDetail = () => {
  const { showEditPage } = useContext(RentalContext);
  return (
    <section>
      {showEditPage && <div className='fixed top-0 left-0 w-full h-[100vh] bg-grayBg'></div>}
      <div className='flex justify-between py-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-orange-600'>Cart</h2>
        <Link to={'/reservation'}><p className='text-orange-600 text-[14px] md:text-[15px] underline'>Reservation</p></Link>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 py-10 lg:text-[15px]'>
        <CartSummary />
        <RateQuote />
      </div>
    </section>
  )
}

export default CartDetail