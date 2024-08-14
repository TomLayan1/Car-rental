import { createContext, useEffect, useState } from "react";
import api from '../Axios/BaseURL'
import cars from '../Data/cars'

export const RentalContext = createContext(null);

const RentalContextProvider = (props) => {

  // STATE TO SELECT MODE
  const [darkMode, setDarkMode] = useState(false);

  // STATE TO SAVE TESTIMOMIAL DATA
  const [testimonial, setTestimonial] = useState([]);

  // STATE FOR CARS
  const [luxCars, setLuxCars] = useState(cars);
  console.log(luxCars)
  // STATE FOR STORING BOOKING DATA
  const [booking, setBooking] = useState({
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })
  console.log(booking)

  // STATE TO SAVE RESERVATION
  const [reservation, setReservation] = useState([]);
  console.log(reservation)

  // STATE FOR SHOWING NOTIFICATION
  const [notification, setNotification] = useState(null);
  console.log(notification)

  // STATE FOR SHOW FORM VALIDATION
  const [formNotification, setFormNotification] = useState(null);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setNotification(null), 8000);
    return () => clearTimeout(timer);
  }, [notification])

  // Validate booking before submission
  const validateBooking = () => {
    if (!booking.selectCar || !booking.pickUp || !booking.dropOff || !booking.pickUpDate || !booking.dropOffDate) {
      setFormNotification('All fields are required');
      return false;
    }
    return true
  }



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

  // CALCULATE PRICE
  const getPrice = () => {
    let costPrice = 0;
    for (const carId in reservation) {
      const rentItem = reservation[carId];
      costPrice += rentItem.rentPrice
    }
    return (costPrice / 100).toFixed(2)
  }

  console.log(getPrice())


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
    getPrice
  }
  return(
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContextProvider;