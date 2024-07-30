import React from 'react'
import BookingForm from './components/BookingForm'
import { Route, Routes } from 'react-router-dom'
import FlightDetails from './components/FlightDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BookingForm />}/>
        <Route path='/flight-details' element={<FlightDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
