import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'

const RateQuote = () => {
  // FROM CONTEXT
  const { getPrice, getTax, getTotalPrice, setPaymentPopUp } = useContext(RentalContext);
  
  return (
    <div className='border border-gray-300 lg:w-[25%] h-[200px] lg:h-[200px] shadow-customShadow text-[15px]'>
      <h3 className='font-bold text-black bg-gray-300 py-1 px-2 mb-2'>Rate Quote</h3>
      <div className=' px-2 flex flex-col justify-between'>
        <div className=''>
          <div className='flex justify-between mb-4'>
            <p className='font-bold'>Car Price</p>
            <p className=''>₦{getPrice()}</p>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='font-bold'>Tax</p>
            <p className=''>₦{getTax()}</p>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='font-bold'>Total</p>
            <p className=''>₦{getTotalPrice()}</p>
          </div>
        </div>
        <button className='bg-primaryColor text-white text-center w-full py-2 flex justify-center gap-1' onClick={()=>setPaymentPopUp(true)}>Proceed To Payment</button>
      </div>
    </div>
  )
}

export default RateQuote