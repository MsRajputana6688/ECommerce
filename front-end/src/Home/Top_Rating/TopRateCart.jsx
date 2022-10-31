import React from 'react'
import { NavLink } from 'react-router-dom';

const TopRateCart = (props) => {
    const { name, star, price, CartImg } = props;
    return (
        <div className='Top-Rate-cart'>
            <div className="rate-cart-img">
                <NavLink to='/Product' state={{ item: JSON.stringify(props) }}>
                    <div className="cart-top-link">
                    </div>
                    <div className="img">
                        <img src={CartImg} alt={name} />
                    </div>
                </NavLink>
            </div>
            <div className="top-cart-info">
                <div className="rate">
                    {
                        star.map((val, ind) => {
                            return <svg key={ind} xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24" fill="#FFCD4E" stroke="#FFCD4E" strokeWidth="2" strokeLinecap="round" className="feather feather-star">
                                <defs>
                                    <linearGradient id="star-0.9242489162248262">
                                        <stop offset="1" stopColor="#FFCD4E"></stop>
                                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="1"></stop>
                                    </linearGradient>
                                </defs>
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                        })
                    }

                </div>
                <div className="Name">
                    {name}
                </div>
                <div className="price">
                    ${price}.00
                </div>
            </div>
        </div>
    )
}

export default TopRateCart