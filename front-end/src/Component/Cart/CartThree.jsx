import React from 'react'
import { NavLink } from 'react-router-dom'

function CartThree(props) {
    const { img, name, price } = props;
    return (
        <div className='CartThree'>
            <div className="cart3-link">
                <div className="cart-3-top">
                    <NavLink to='Product' state={{ item: JSON.stringify(props) }}>
                        <div className="cart-3-img">
                            <img src={img} alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className="cart-3-bottom mt-5">
                    <h4 className="cart-3-itemName">{name}</h4>
                    <h4 className="cart-3-price mt-5">${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default CartThree