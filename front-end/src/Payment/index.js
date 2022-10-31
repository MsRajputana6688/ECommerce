import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ChBTN from '../Component/ChBTN'

const Payment = () => {
    const { totalAmount } = useSelector(state => state.DataRedc)
    const [Active, SetActive] = useState({
        CrCard: false,
        Paypal: false,
    })
    const list = { details: true, Payment: true, Review: false };
    const RadioBtn = (event) => {
        const target = event.target.name;
        SetActive(() => {
            if (target === 'CrCard')
                return {
                    CrCard: true,
                    Paypal: false,
                }
            else if (target === 'Paypal')
                return {
                    CrCard: false,
                    Paypal: true,
                }
            else
                return {
                    CrCard: false,
                    Paypal: false,
                }
        })
    }
    return (
        <div className="container">
            <ChBTN {...list} />
            <div className="cart_main_container cart_main_wrap">
                <div className="cart-section">
                    <div className="Payment">
                        <div className="Payment-col">
                            <div className="pay-method">
                                <input type="radio" name="CrCard" onClick={RadioBtn} className='pay-btn' id="CrCard" />
                                <label className='pay-label' htmlFor="CrCard">Pay with credit card</label>
                            </div>
                            <div className={Active.CrCard ? "col-border active" : 'col-border'}> </div>
                            <div className={Active.CrCard ? "pay-info active" : "pay-info"}>
                                <div className="pay-detaile">
                                    <div className="Address-field">
                                        <div className="field-cont">
                                            <label htmlFor="CdNum">Card Number</label>
                                            <input type="text" id='CdNum' name='CdNum' className='form-field' />
                                        </div>
                                        <div className="field-cont">
                                            <label htmlFor="ExpDate">Exp Data</label>
                                            <input type="text" id='ExpDate' name='ExpDate' placeholder='MM-YY' className='form-field' />
                                        </div>
                                    </div>
                                    <div className="Address-field">
                                        <div className="field-cont">
                                            <label htmlFor="CdName">Card On Card</label>
                                            <input type="text" id='CdName' name='CdName' className='form-field' />
                                        </div>
                                        <div className="field-cont">
                                            <label htmlFor="Code">Code</label>
                                            <input type="text" id='Code' name='Code' className='form-field' />
                                        </div>
                                    </div>
                                    <div className="Address-field">
                                        <div className="pay-submit">
                                            <button className='field-cont'>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-border active">{/* border  */}</div>


                        <div className="Payment-col">
                            <div className="pay-method">
                                <input type="radio" name="Paypal" onClick={RadioBtn} className='pay-btn' id="Paypal" />
                                <label className='pay-label' htmlFor="Paypal">Pay with Paypal</label>
                            </div>
                            <div className="col-border active">{/* border  */}</div>
                            <div className={Active.Paypal ? "pay-info active" : "pay-info"}>
                                <div className="pay-detaile">
                                    <div className="paypal-inner">
                                        <div className="paypal-label">
                                            <label htmlFor="PEmail">Paypal Email</label>
                                        </div>
                                        <div className="pay-input">
                                            <input type="text" className='P-input' />
                                            <button className='P-btn' >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Active.Paypal ? "col-border active" : "col-border"}> </div>
                        </div>

                        <div className="Payment-col">
                            <div className="pay-method">
                                <input type="radio" name="pay" onChange={RadioBtn} className='pay-btn' id="Cash" />
                                <label className='pay-label' htmlFor="Cash">Cash On Delivery</label>
                            </div>
                        </div>
                    </div>
                    <div className="Address-field mt-40 pb-20">
                        <NavLink className='Link-cont' to='/Checkout'>
                            <button className='link-btn' type='button'>Back to CheckOut Detaile</button>
                        </NavLink>
                        <NavLink className='Link-cont' to='/Orders'>
                            <button className='link-btn active' type='button'>Review</button>
                        </NavLink>
                    </div>
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
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Payment
