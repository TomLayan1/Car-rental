import React from 'react'
import RentalContextProvider from './Context/Context'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import Cart from './Pages/Cart'
import Reservation from './Pages/Reservation'

const App = () => {

  return (
      <RentalContextProvider>
        <div className='w-full max-h-[100vh] overflow-y-scroll scrollBar scroll-smooth'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/reservation' element={<Reservation />} />
            </Routes>
          <Footer />
          </BrowserRouter>
        </div>
      </RentalContextProvider>
  )
}

export default App