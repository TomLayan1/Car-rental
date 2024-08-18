import { createContext, useEffect, useState } from "react";
import { cars, testimonials } from "../Data/rentalData";

export const RentalContext = createContext(null);

const RentalContextProvider = (props) => {

  // STATE TO SELECT MODE
  const [darkMode, setDarkMode] = useState(false);

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

  // STATE TO SAVE TESTIMOMIAL DATA
  const [testimonial, setTestimonial] = useState(testimonials);

  // STATE FOR CARS
  const [luxCars, setLuxCars] = useState(cars);

  // STATE FOR STORING BOOKING DATA
  const [booking, setBooking] = useState({
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })

  // STATE TO SAVE RESERVATION
  const [reservation, setReservation] = useState([]);

  // STATE FOR SHOWING NOTIFICATION
  const [notification, setNotification] = useState(null);

  // STATE FOR SHOW FORM VALIDATION
  const [formNotification, setFormNotification] = useState(null);

  // DELETE RESERVATION
  const deleteReservation = (id) => {
      const newReservation = reservation.filter(reservation => reservation.id !== id);
      setReservation(newReservation)
      setRentalCart(newReservation)
  }

  // CALCULATE PRICE
  const getPrice = () => {
    let costPrice = 0;
    for (const carId in reservation) {
      const rentItem = reservation[carId];
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

  // STATE TO EDIT RESERVATIONS
  const [editReservation, setEditReservation] = useState({
    id: '',
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })

  // FUNCTION TO SHOW EDITING PAGE
  const handleEditReservation = (id) => {
    setShowEditPage(true)
    const selectedReservation = reservation.find(reservation => reservation.id === id)
    if (selectedReservation) {
      setEditReservation({...selectedReservation});
    }
  }

  const contextValue = {
    darkMode,
    setDarkMode,
    testimonial,
    luxCars,
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