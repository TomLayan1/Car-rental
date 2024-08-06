import { createContext, useEffect, useState } from "react";
import api from '../Axios/BaseURL'

export const RentalContext = createContext(null);

const RentalContextProvider = (props) => {

  // STATE TO SELECT MODE
  const [darkMode, setDarkMode] = useState(false);

  // STATE TO SAVE TESTIMOMIAL DATA
  const [testimonial, setTestimonial] = useState([])
  console.log(testimonial)

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
    testimonial
  }
  return(
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContextProvider;