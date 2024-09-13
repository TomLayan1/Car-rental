import { createContext, useEffect, useState } from "react";

export const RentalContext = createContext(null);

const RentalContextProvider = (props) => {

  // STATE TO SELECT MODE
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') : 'light'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  // STATE TO SAVE CART
  const [rentalCart, setRentalCart] = useState(() => {
    const savedCart = localStorage.getItem('rentalCart');
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('rentalCart', JSON.stringify(rentalCart));
  }, [rentalCart])

  const [reservation, setReservation] = useState(() => {
    const savedReservation = localStorage.getItem('reservation');
    return savedReservation ? JSON.parse(savedReservation) : [];
  })
  console.log(reservation)

  useEffect(() => {
    localStorage.setItem('reservation', JSON.stringify(reservation));
  }, [reservation])

  // STATE TO SHOW EDITING PAGE
  const [showEditPage, setShowEditPage] = useState(false);

  // STATE FOR STORING BOOKING DATA
  const [booking, setBooking] = useState({
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })

  // STATE TO EDIT RESERVATIONS
  const [editReservation, setEditReservation] = useState({
    id: '',
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })

  // STATE FOR SHOWING NOTIFICATION
  const [notification, setNotification] = useState(null);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setNotification(''), 3000)
    return () => clearTimeout(timer)
  }, [notification])

  // STATE FOR SHOW FORM VALIDATION
  const [formNotification, setFormNotification] = useState(null);

  // DELETE RESERVATION
  const deleteCartItem = (id) => {
      const newCart = rentalCart.filter(rentalCart => rentalCart.id !== id);
      setRentalCart(newCart)
      setNotification('Item Removed From Cart')
  }

  // CALCULATE PRICE
  const getPrice = () => {
    let costPrice = 0;
    for (const carId in rentalCart) {
      const rentItem = rentalCart[carId];
      costPrice += rentItem.rentPrice
    }
    return costPrice
  }

  // CALCULATE TAX
  const getTax = () => {
    const costPrice = getPrice();
    const tax = Number(costPrice * 0.1);
    return tax
  }

  // CALCULATE TOTAL PRICE
  const getTotalPrice = () => {
    const costPrice = getPrice();
    const tax = getTax();
    const totalPrice = Number(costPrice) + Number(tax)
    return totalPrice
  }

  // STATE TO SHOW PAYMENT FORM
  const [paymentPopUp, setPaymentPopUp] = useState(false);

  // FUNCTION TO SHOW EDITING PAGE
  const handleEditReservation = (id) => {
    setShowEditPage(true)
    const selectedReservation = rentalCart.find(rentalCart => rentalCart.id === id)
    if (selectedReservation) {
      setEditReservation({...selectedReservation});
    }
  }

  const contextValue = {
    darkMode,
    setDarkMode,
    booking,
    setBooking,
    rentalCart,
    setRentalCart,
    notification,
    setNotification,
    formNotification,
    setFormNotification,
    deleteCartItem,
    getPrice,
    getTax,
    getTotalPrice,
    paymentPopUp,
    setPaymentPopUp,
    showEditPage,
    setShowEditPage,
    handleEditReservation,
    editReservation,
    setEditReservation,
    reservation,
    setReservation
  }

  return(
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContextProvider;