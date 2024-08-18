import React, { useContext } from 'react'
import { RentalContext } from '../Context/Context'

const Test = () => {
  const { luxCars, rentalCart, setRentalCart } = useContext(RentalContext)
  return (
    <div>
      {rentalCart.map(car => (
        <div></div>
      ))}
    </div>
  )
}

export default Test