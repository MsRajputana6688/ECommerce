import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveCart, Increament, Decreament } from '../Redux/Action'

const Check_Cart = (props) => {
    const { id, name, Amount, price, Discount, addToCartImg } = props
    const SellPrice = Math.floor(price - (price / 100) * Discount);
    const Dispatch = useDispatch()
    return (
        <div className="cart">
            <div className="cart-dp">
                <img src={addToCartImg} alt="" />
            </div>
            <div className="cart-sort-detaile">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-price">${SellPrice} x {Amount} <span>${SellPrice * Amount}</span></div>
            </div>
            <div className="cart-operation">
                <div className="cart-cls">
                    <button className='cart-btn-cls' onClick={() => Dispatch(RemoveCart(id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="ionicon" viewBox="0 0 512 512">
                            <path fill="none" stroke="#345678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="cart-op-btn">
                    <button className="cart-btn-cnt" onClick={() => Dispatch(Decreament(id))}>
                        <span></span>
                    </button>
                    <div className="cart-btn-cnt">{Amount}</div>
                    <button className="cart-btn-cnt" onClick={() => Dispatch(Increament(id))}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Check_Cart