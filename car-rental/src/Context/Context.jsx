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

  // STATE TO SAVE RESERVATION
  const [reservation, setReservation] = useState([]);
  console.log(reservation)

  // STATE FOR STORING BOOKING DATA
  const [booking, setBooking] = useState({
    selectCar: '',
    pickUp: '',
    dropOff: '',
    pickUpDate: '',
    dropOffDate: ''
  })
  console.log(booking)


  // FETCH TESTIMONIAL DATA
  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        await api.get('/testimonial').then( response => {
          setTestimonial(response.data);
        })
      } catch (err) {
        setTestimonial(err);
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
        console.log(err)
      } 
    }

    fetchReservationData()
  }, [])


  const contextValue = {
    darkMode,
    setDarkMode,
    testimonial,
    luxCars,
    booking,
    setBooking,
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