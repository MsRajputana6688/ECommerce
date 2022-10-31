import React from 'react'
import Check_Cart from './Check_Cart'
import { useSelector } from 'react-redux'
import ChBTN from '../Component/ChBTN'
import { NavLink } from 'react-router-dom'

const CartChild = () => {
    const { AddToCart, totalAmount, totalItem } = useSelector(state => state.DataRedc)
    const list = { details: false, Payment: false, Review: false }
    return (
        <div className="container">
            <ChBTN {...list} />
            <div className="cart_main_container">
                <div className="cart-section">
                    {
                        AddToCart ? AddToCart.map((CurElem) => {
                            return <Check_Cart key={CurElem.id} {...CurElem} />
                        }) : ''
                    }
                </div>
                <div className="cart-query">
                    <div className="cart-query-tol">
                        {/* total */}
                        <div className="cart-total-amout">
                            <div className="cart-total">
                                <div className="n-total">Total:</div>
                                <div className="t-Price">${totalAmount}</div>
                            </div>
                        </div>

                        {/* voucher */}
                        <div className="cart-voucher">
                            <div className="cart-voucher-title">Additional Comments <code>Note</code></div>
                            <form>
                                <textarea id='voucher_TextArea' rows='8' />
                                <div className="hr"></div>
                                <input type="text" placeholder='Voucher' className='cart-voucher-field' />
                                <button className='cart-voucher-field' type='button'>Apply Voucher</button>
                            </form>
                        </div>


                        {/* Estimates */}
                        <div className="cart-voucher">
                            <div className="cart-voucher-title">Shipping Estimates</div>
                            <form method='post' className='addToCart-From'>
                                <label htmlFor="state" className='label-target'>State</label>
                                <input id="state" className='cart-voucher-field' />

                                <label htmlFor="city" className='label-target'>City</label>
                                <input id="city" className='cart-voucher-field' />

                                <label htmlFor="pinCode" className='label-target'>Zip Code</label>
                                <input id="pinCode" className='cart-voucher-field' />

                                <button className='cart-voucher-field' type='button'>Calculate Shiping</button>
                                <NavLink to='/Checkout'>
                                    <button className='cart-voucher-field active' type='button'>Checkout Now</button>
                                </NavLink>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartChild