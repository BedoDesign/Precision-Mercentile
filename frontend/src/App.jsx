import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import About from './pages/AboutUs/About'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/PlaceOrder' element={<PlaceOrder />}></Route>
          <Route path='/Verify' element={<Verify />}></Route>
          <Route path='/MyOrders' element={<MyOrders />}></Route>
        </Routes>
        <Footer />
      </div>
    </>

  )
}

export default App

