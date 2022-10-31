import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCart } from '../../Redux/Action'
import { Add_To_Wish } from '../../Redux/Action'
const CartTwo = (props) => {
    const { name, star, price, img, CartImg, Stock, brand, Sold, setShow, Discount } = props
    const SellPrice = Math.floor(price - (price / 100) * Discount);
    const Dispatch = useDispatch()
    window.addEventListener('click', (event) => {
        if (event.target.className === 'pop-card-container') {
            setShow(false)
        }
    })
    return (
        <div className="pop-card-container">
            <div className="pop-card">
                <button type='button' className="pop-card-close-btn" onClick={() => setShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="ionicon" viewBox="0 0 512 512">
                        <path fill="none" stroke="#e94560" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368">
                        </path>
                    </svg>
                </button>
                <div className="pop-card-top">
                    <div className="pop-card-img">
                        <div className="img">
                            <img src={CartImg} alt="" width='100%' />
                        </div>
                        <div className="pop-card-buttom">
                            <div className="img-box">
                                <img src={CartImg} alt="" width='100%' />
                            </div>
                            <div className="img-box active">
                                <img src={CartImg} alt="" width='100%' />
                            </div>
                            <div className="img-box">
                                <img src={CartImg} alt="" width='100%' />
                            </div>
                        </div>
                    </div>
                    <div className="pop-card-info">
                        <h1 className="name">{name}</h1>
                        <div className="brand">Brand:&nbsp;&nbsp; <span>{brand}</span></div>
                        <div className="rated">Rated:&nbsp;&nbsp;
                            {
                                star.map((val, ind) => {
                                    if (val == 1) {
                                        return (
                                            <svg key={ind} xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24" fill="#FFCD4E" stroke="#FFCD4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                <defs>
                                                    <linearGradient id="star-0.9242489162248262">
                                                        <stop offset="1" stopColor="#FFCD4E"></stop>
                                                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="1"></stop>
                                                    </linearGradient>
                                                </defs>
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        )
                                    } else {
                                        return (
                                            <svg key={ind} xmlns="http://www.w3.org/2000/svg" width="20" height="100%" viewBox="0 0 24 24" fill="none" stroke="#FFCD4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                <defs>
                                                    <linearGradient id="star-0.9242489162248262">
                                                        <stop offset="1" stopColor="#FFCD4E"></stop>
                                                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="1"></stop>
                                                    </linearGradient>
                                                </defs>
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="price">${SellPrice} <span>${price}</span></div>
                        <div className="stock"> <span>{Stock ? 'Stock Available' : 'Stock Not Available'}</span></div>
                        <button type='button' className="btn" onClick={() => Dispatch(Add_To_Wish(props))}>Add to Wishlist</button>
                        <div className="by">Sold by:&nbsp;&nbsp;<span>{Sold}</span></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartTwo