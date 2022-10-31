import React from 'react'
import { NavLink } from 'react-router-dom';

const CartFour = (props) => {
    const { name, CartImg, price, Discount } = props
    const SellPrice = Math.floor(price - (price / 100) * Discount);
    return (
        <div className="dis-cart">
            <div className="cart-range ">
                <div className="cart3-link">
                    <div className="cart-3-top">
                        <NavLink to='./Product' state={{ item: JSON.stringify(props) }}>
                            <div className="cart-3-img">
                                <img src={CartImg} alt="" />
                            </div>
                        </NavLink>
                    </div>
                    <div className="cart-3-bottom mt-5">
                        <h4 className="cart-3-itemName">{name}</h4>
                        <h4 className="cart-3-price mt-5">${SellPrice} <span>${price}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartFour