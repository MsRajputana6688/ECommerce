import React from 'react'
import { NavLink } from 'react-router-dom';
const TopCart = (props) => {
    const { name, TopCatPic, order } = props
    return (
        <div className="topCart_cont">
            <div className='TopCart'>
                <div className="Top-cart-item">
                    <div className="top-cart-img">
                        <img src={TopCatPic} alt="" />
                    </div>
                    <NavLink
                        to='./Product'
                        state={{ item: JSON.stringify(props) }} >
                        <div className="top-cart-link">
                            <div className="title">{name}</div>
                            <div className="order">{order}K order this week</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TopCart