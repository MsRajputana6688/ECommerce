import React from 'react'
import { useSelector } from 'react-redux'
import ChBTN from '../Component/ChBTN'
import ShFrom from './ShFrom'

const CheckOut = () => {
    const { totalAmount } = useSelector(state => state.DataRedc);
    const list = { details: true, Payment: false, Review: false };
    return (
        <div className="container">
            <ChBTN {...list} />
            <div className="cart_main_container cart_main_wrap">
                <div className="cart-section">
                    <ShFrom />
                </div>
                <div className="cart-query">
                    <div className="cart-query-tol">
                        {/* total */}
                        <div className="cart-total-amout">
                            <div className="cart-total">
                                <div className="n-total">Subtotal::</div>
                                <div className="t-Price">${totalAmount}</div>
                            </div>
                            <div className="cart-total">
                                <div className="n-total">Shiping:</div>
                                <div className="t-Price">-</div>
                            </div>
                            <div className="cart-total">
                                <div className="n-total">Tax:</div>
                                <div className="t-Price">${totalAmount ? 40 : 0}</div>
                            </div>
                            <div className="cart-total">
                                <div className="n-total">Discount:</div>
                                <div className="t-Price">-</div>
                            </div>
                        </div>
                        <div className="cart-total mt-10">
                            <div className="n-total"></div>
                            <div className="t-Price" style={{ 'fontSize': '22px' }}>${totalAmount + (totalAmount ? 40 : 0)}</div>
                        </div>

                        {/* voucher */}
                        <div className="cart-voucher mt-8">
                            <form>
                                <input type="text" placeholder='Voucher' className='cart-voucher-field' />
                                <button className='cart-voucher-field' type='button'>Apply Voucher</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckOut
