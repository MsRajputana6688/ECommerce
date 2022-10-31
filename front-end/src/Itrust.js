import React, { useState } from 'react'
import FixHeader from './Fix-header'
import Header from './Header/'
import BottemNav from './mobile-Navigate'
import Home from './Home'
import Footer from './footer'
import ChackCard from './aside'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Product'
import Navbar from './Navbar'
import Cart from './Cart'
import CheckOut from './CheckOut'
import Payment from './Payment'
import Order from './Orders'
import WishList from './WishList'
import Support from './Support'
import Profile from './Profile'
import Address from './Address'
import PayMethod from './payment-methods'

const Itrust = () => {
  const [show, setShowAside] = useState(false)
  window.document.addEventListener('click', (event) => {
    if (event.target.className === "cart-container active") {
      setShowAside(false)
    }
  })

  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <FixHeader setShowAside={setShowAside} />
        <BottemNav />

        <Navbar />
        {/* main container  */}
        <Routes>
          <Route path='/' element={< Home />} />     {/* Home */}
          <Route path='/Product' element={<Product />} />    {/* Prodect */}
          <Route path='/Cart' element={<Cart />} />   {/* Cart */}
          <Route path='/CheckOut' element={<CheckOut />} />   {/* CheckOut */}
          <Route path='/Payment' element={<Payment />} /> {/* Payment */}
          <Route path='/Orders' element={<Order />} />  {/*orders */}
          <Route path='/WishList' element={<WishList />} />  {/*orders */}
          <Route path='/Support' element={<Support />} />  {/*orders */}
          <Route path='/Profile' element={<Profile />} />  {/*orders */}
          <Route path='/Addresses' element={<Address />} />  {/*orders */}
          <Route path='/Payment-Method' element={<PayMethod />} />  {/*orders */}
        </Routes>

        {/* aside  */}
        <aside>
          <div className={show ? "si active" : "si"}>
            <ChackCard setShowAside={setShowAside} />
          </div>
        </aside>

        {/* footer  */}
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default Itrust