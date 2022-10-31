import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CartTwo from './CartTwo';

const CartOne = (props) => {
    const [show, setShow] = useState(false);
    const { Discount, name, star, price, CartImg } = props
    const SellPrice = Math.floor(price - (price / 100) * Discount);
    return (
        <div className='cart-component'>
            <div className="cart-inner">

                <div className="cart-img-box">
                    <div className="cart-action">
                        <div className="discount">
                            <span>
                                {Discount}% off
                            </span>
                        </div>
                        <div className="action">
                            <div className="see-cart" onClick={() => setShow(true)}>
                                <img src="./assets/svg/eye.svg" alt="" />
                            </div>
                            <div className="like-cart">
                                <img src="./assets/svg/heart.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <NavLink to='./Product' state={{ item: JSON.stringify(props) }}>
                        <div className="cart-img">
                            <img src={CartImg} alt="" />
                        </div>
                    </NavLink>

                </div>
                <div className="cart-detaile-box">
                    <div className="cart-detaile">
                        <div className="product-name">{name}</div>
                        <div className="product-rating">
                            {
                                star.map((value, ind) => {
                                    return <img key={ind} src="./assets/svg/Star.svg" alt="" />
                                })
                            }
                        </div>
                        <div className="product-price">${SellPrice} <span>${price}</span></div>
                    </div>
                    <div className="cart-add-btn">
                        <button className='product-btn'>
                            <span></span>
                        </button>
                        <div className="item-count">
                            4
                        </div>
                        <button className='product-btn'>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            {
                show ? <CartTwo key={new Date().getTime().toString()} {...props} setShow={setShow} /> : ''
            }
        </div >
    )
}

export default CartOne