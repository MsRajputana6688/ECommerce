import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Increament } from '../Redux/Action';
import { Decreament } from '../Redux/Action';
import { RemoveCart } from '../Redux/Action';
const Card = (props) => {
    const { id, name, price, CartImg, Amount, Discount } = props;
    const SellPrice = Math.floor(price - (price / 100) * Discount);
    const Dispatch = useDispatch()
    return (
        <div className="Card">
            <div id="card-amount">
                <button className="counter" id='counter-1' onClick={() => Dispatch(Increament(id))}>
                    <span></span>
                    <span></span>
                </button>
                <div className="counter">{Amount}</div>
                <button className="counter" id='counter-2' onClick={() => Dispatch(Decreament(id))}>
                    <span></span>
                </button>
            </div>
            <div className="aside-cart-img">
                <NavLink to='./Product' state={{ item: JSON.stringify(props) }}>
                    <img src={CartImg} alt="headphone.png" />
                </NavLink>
            </div>

            <div className="card-prodect">
                <NavLink to='./Product' state={{ item: JSON.stringify(props) }}>
                    <div className="prodect-name">{name}</div>
                    <div className="single-prodect-price">{SellPrice}$</div>
                    <div className="muli-prodect-price">{SellPrice * Amount}$</div>
                </NavLink>
            </div>

            <div className="card-close-btn">
                <button type='button' onClick={() => Dispatch(RemoveCart(id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="ionicon" viewBox="0 0 512 512">
                        <path fill="none" stroke="#345678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368">
                        </path>
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default memo(Card)