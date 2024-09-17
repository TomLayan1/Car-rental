import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RiSecurePaymentLine } from "react-icons/ri";
import { RentalContext } from '../Context/Context';
import PaystackPop from '@paystack/inline-js'


const Payment = () => {
  // FROM CONTEXT
  const { getTotalPrice, paymentPopUp, setPaymentPopUp, rentalCart, setRentalCart, setNotification, setReservation } = useContext(RentalContext);

  const [paymentNotification, setPaymentNotification] = useState(null);

  const amountToBePaid = Number(getTotalPrice())
  const [paymentForm, setPaymentForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    amount: amountToBePaid
  })

  const handlePayment = (event) => {
    event.preventDefault();
    setPaymentForm(prev => {return {...prev, [event.target.name]: event.target.value}})
  }

  // PAYMENT FORM VALIDATION
  const validatePayment = () => {
    if (!paymentForm.email || !paymentForm.firstName || !paymentForm.lastName || !paymentForm.amount) {
      setPaymentNotification('All fields are required');
      return false;
    }
    return true
  }

  // PAYSTACK IMPLEMENTATION
  const payWithPayStack = (event) => {
  event.preventDefault();

  // Validate before proceeding
  if (!validatePayment()) return;

  const paystack = new PaystackPop ();
  paystack.newTransaction({
    key: 'pk_test_fc33ab46313be3d068d153d5a66fc5451d2c814c',
    amount: paymentForm.amount * 100,
    email: paymentForm.email,
    firstname: paymentForm.firstName,
    lastname: paymentForm.lastName,
    onSuccess(transaction) {
      let message = `Payment Complete! Reference ${transaction.reference}`;
      alert(message);

      // Clear rentalCart after successful payment
      setRentalCart([]);

      setNotification('Cart Emptied. Check Reservation.')
      
      setReservation(order => [...order, ...rentalCart])
    },
    onCancel(){
      alert('Transaction Canceled!')
    }
  })

  setPaymentForm({
      email: '',
      firstName: '',
      lastName: '',
      amount: '₦'
    })
    setPaymentPopUp(false)
  }
  
  return (
    <>
      {paymentPopUp && <div className='bg-grayBg text-black fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center'>
        <div className='bg-white w-[89%] md:w-[50%] lg:w-[40%] p-5 md:p-8'>
          <div className='flex items-center justify-between mb-9'>
            <h3 className='text-primaryColor text-xl md:text-2xl font-bold'>Enter Details</h3>
            <FaTimes size={19} style={{ color: 'grey', cursor: 'pointer'}} onClick={() => setPaymentPopUp(false)} />
          </div>
          {paymentNotification && <p className='text-red-700'>{paymentNotification}*</p>}
          <form>
            <input
              className='border border-primaryColor bg-orange-50 w-full p-2 mb-5 outline-none text-[15px]'
              type='text'
              placeholder='First Name'
              onChange={handlePayment}
              value={paymentForm.firstName}
              name='firstName' />
            <input
              className='border border-primaryColor bg-orange-50 w-full p-2 mb-5 outline-none text-[15px]'
              type='text'
              placeholder='last Name'
              onChange={handlePayment}
              value={paymentForm.lastName}
              name='lastName' />
            <input
              className='border border-primaryColor bg-orange-50 w-full p-2 mb-5 outline-none text-[15px]'
              type='email'
              placeholder='Email'
              onChange={handlePayment}
              value={paymentForm.email}
              name='email' />
            <div className='border border-primaryColor p-2 mb-5'>
              <p className='w-full text-[15px]'>₦{(paymentForm.amount).toLocaleString()}</p>
            </div>
            <button className='bg-primaryColor p-2 w-full text-white cursor-pointer flex items-center justify-center gap-1' type='submit' onClick={payWithPayStack}>Pay <RiSecurePaymentLine size={23} /></button>
          </form>
        </div>
      </div>}
    </>
  )
}

export default Payment