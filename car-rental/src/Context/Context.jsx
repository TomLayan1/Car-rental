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

  // STATE FOR SHOW FORM VALIDATION
  const [formNotification, setFormNotification] = useState(null);

  // DELETE RESERVATION
  const deleteReservation = (id) => {
      const newReservation = rentalCart.filter(rentalCart => rentalCart.id !== id);
      setRentalCart(newReservation)
  }

  // CALCULATE PRICE
  const getPrice = () => {
    let costPrice = 0;
    for (const carId in rentalCart) {
      const rentItem = rentalCart[carId];
      costPrice += rentItem.rentPrice
    }
    return (costPrice / 100).toFixed(2)
  }

  // CALCULATE TAX
  const getTax = () => {
    const costPrice = getPrice();
    const tax = Number(costPrice * 0.1);
    return tax.toFixed(2)
  }

  // CALCULATE TOTAL PRICE
  const getTotalPrice = () => {
    const costPrice = getPrice();
    const tax = getTax();
    const totalPrice = Number(costPrice) + Number(tax)
    return totalPrice.toFixed(2)
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
    deleteReservation,
    getPrice,
    getTax,
    getTotalPrice,
    paymentPopUp,
    setPaymentPopUp,
    showEditPage,
    setShowEditPage,
    handleEditReservation,
    editReservation,
    setEditReservation
  }

  return(
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContextProvider;