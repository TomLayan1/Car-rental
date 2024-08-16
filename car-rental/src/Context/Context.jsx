import { createContext, useEffect, useState } from "react";
import api from '../Axios/BaseURL'
import cars from '../Data/cars'

export const RentalContext = createContext(null);

const RentalContextProvider = (props) => {

  // STATE TO SELECT MODE
  const [darkMode, setDarkMode] = useState(false);

  // STATE TO SHOW EDITING PAGE
  const [showEditPage, setShowEditPage] = useState(false);

  // STATE TO SAVE TESTIMOMIAL DATA
  const [testimonial, setTestimonial] = useState([]);

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
  console.log(reservation);

  // STATE FOR SHOWING NOTIFICATION
  const [notification, setNotification] = useState(null);

  // STATE FOR SHOW FORM VALIDATION
  const [formNotification, setFormNotification] = useState(null);


  // FETCH TESTIMONIAL DATA
  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        await api.get('/testimonial').then( response => {
          setTestimonial(response.data);
        })
      } catch (err) {
        setTestimonial(err.message);
      }
    }

    fetchTestimonialData();
  }, [])

  // Validate booking before submission
  const validateBooking = () => {
    if (!booking.selectCar || !booking.pickUp || !booking.dropOff || !booking.pickUpDate || !booking.dropOffDate) {
      setFormNotification('All fields are required');
      return false;
    }
    return true
  }

  // FETCH RESERVATION DATA
  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        await api.get('/bookings').then(response => {
          setReservation(response.data);
        })
      } catch (err) {
        console.log(err.message)
      } 
    }

    fetchReservationData()
  }, [])

  // DELETE RESERVATION
  const deleteReservation = async (id) => {
    try {
      await api.delete(`/bookings/${id}`)
      const newReservation = reservation.filter(reservation => reservation.id !== id);
      setReservation(newReservation)
    } catch (err) {
      console.log(err.response)
    }
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
  console.log(editReservation)

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
    reservation,
    setReservation,
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