import React from 'react'
import RentalContextProvider from './Context/Context'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import Cart from './Pages/Cart'
import Edit from './Component/Edit'

const App = () => {

  return (
      <RentalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/edit:id' element={<Edit />}  /> */}
          </Routes>
        <Footer />
        </BrowserRouter>
      </RentalContextProvider>
  )
}

export default App