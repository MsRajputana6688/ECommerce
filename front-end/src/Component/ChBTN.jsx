import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ChBTN = (props) => {
    const { details, Payment, Review } = props;

    return (
        <div className="cart-track">
            <div className="track-point">
                <NavLink to='/Cart'>
                    <div className="cart-track-point active">1. Cart</div>
                </NavLink>
                <div className={details ? "cart-track-path active" : "cart-track-path"} ></div>
                <NavLink to='/CheckOut'>
                    <div className={details ? "cart-track-point active" : "cart-track-point"} >2. Detasile</div>
                </NavLink>

                <div className={Payment ? "cart-track-path active" : "cart-track-path"}></div>
                <NavLink to='/Payment'>
                    <div className={Payment ? "cart-track-point active" : "cart-track-point"} >3. Payment</div>
                </NavLink>

                <div className={Review ? "cart-track-path active" : "cart-track-path"} ></div>
                <NavLink to='/Orders'>
                    <div className={Review ? "cart-track-point active" : "cart-track-point"} >4. Review</div>
                </NavLink>
            </div>
            <div className="cart-empty">
            </div>
        </div>
    )
}

export default ChBTN