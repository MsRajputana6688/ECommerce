import './style.css'
import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../Redux/Action'
import { NavLink } from 'react-router-dom'
const ChackCard = ({ setShowAside }) => {
  const { AddToCart, totalAmount, totalItem } = useSelector(state => state.DataRedc);
  const Dispatch = useDispatch();
  return (
    <>
      <div className="cart-container active">
        <div className="Chack-Cart">
          {/* cart header  */}
          <div className="cart-header">
            <div className="cart-short">
              <span className='card-icon'>
                <img src="./assets/logo33.png" alt="" />
              </span>
              <span className='card-amount'>
                {totalItem}
              </span>
              <span className='card-text'>
                item
              </span>
            </div>
            <button type='button' className="remove-btn" onClick={() => Dispatch(clearCart())}>
              <span>Clear All</span>
            </button>
          </div>

          <div className="cart-item-container">
            <div className="cart-item-div">
              {
                AddToCart ? AddToCart.map((CorrtValue, ind) => {
                  return (
                    <Card
                      key={ind.toString()}   // Unique key 
                      {
                      ...CorrtValue   // passing all Data  => 
                      }
                    />
                  )
                }) : ''
              }
            </div>
          </div>

          {/* cart footer  */}
          <div className="cart-footer">
            <NavLink to='./CheckOut' className='cart-btn'>
              <button type='button' className='cart-btn-btn' id='cart-btn-1' onClick={() => setShowAside(false)}>Checkout Now (${totalAmount}.00)</button>
            </NavLink>
            <NavLink to='./Cart' className='cart-btn'>
              <button type='button' className='cart-btn-btn' id='cart-btn-2' onClick={() => setShowAside(false)}> view Cart</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChackCard