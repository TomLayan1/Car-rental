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

  // FETCH TESTIMONIAL DATA
  useEffect(() => {
    const fetchTestimonialData = async () => {
      await api.get('/testimonial').then( response => {
        setTestimonial(response.data);
      })
    }

    fetchTestimonialData();
  }, [])


  const contextValue = {
    darkMode,
    setDarkMode,
    testimonial,
    cars,
    luxCars
  }
  return(
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContextProvider;