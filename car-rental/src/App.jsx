import React from 'react'
import RentalContextProvider from './Context/Context'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import Contact from './Component/Contact'

const App = () => {

  return (
      <RentalContextProvider>
        <BrowserRouter>
          <Contact />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RentalContextProvider>
  )
}

export default App