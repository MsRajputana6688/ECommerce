import React from 'react'
import './style.css'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import RightScroll from '../../Component/RightScroll'
import LeftScroll from '../../Component/LeftScroll'
import CartOne from '../../Component/Cart/CartOne'
import { useSelector } from 'react-redux'
const FlashDeal = () => {
    const { item } = useSelector(state => state.DataRedc);
    const scrollCardInc = () => {
        let cardDeal = document.getElementById('card-Deal');
        if (cardDeal.clientWidth <= 500) {
            cardDeal.scrollBy(cardDeal.clientWidth / 1, 0)
        }
        else if ((cardDeal.clientWidth + 40) <= 768 && (cardDeal.clientWidth + 40) >= 500) {
            cardDeal.scrollBy(cardDeal.clientWidth / 2, 0)
        }
        else if ((cardDeal.clientWidth + 40) <= 900 && (cardDeal.clientWidth + 40) >= 768) {
            cardDeal.scrollBy(cardDeal.clientWidth / 3, 0)
        }
        else {
            cardDeal.scrollBy(cardDeal.clientWidth / 4, 0)
        }
    }
    const scrollCardDec = () => {
        let cardDeal = document.getElementById('card-Deal');
        if (cardDeal.clientWidth <= 500) {
            cardDeal.scrollBy(-(cardDeal.clientWidth / 1), 0)
        }
        else if ((cardDeal.clientWidth + 40) <= 768 && (cardDeal.clientWidth + 40) >= 500) {
            cardDeal.scrollBy(-(cardDeal.clientWidth / 2), 0)
        }
        else if ((cardDeal.clientWidth + 40) <= 900 && (cardDeal.clientWidth + 40) >= 768) {
            cardDeal.scrollBy(-(cardDeal.clientWidth / 3), 0)
        }
        else {
            cardDeal.scrollBy(-(cardDeal.clientWidth / 4), 0)
        }
    }
    return (
        <div className='container'>
            <div className="container-header mt-20">
                <div className="flash-left">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z" fill="red" stroke="trasperent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                        </svg>
                    </span>
                    <span className="text">
                        Flash Deal
                    </span>
                </div>
                <ViewAllCart />
            </div>

            {/* card container   */}
            <div className="flash-card-container">
                {/* scrolling back button  */}
                <LeftScroll scrollCardDec={scrollCardDec} />
                <div className="flash-scroll" id='card-Deal'>
                    <div className="card-Deal ">
                        {
                            item.map((curVal) => {
                                if (curVal.Discount >= 30 && 50 >= curVal.Discount)
                                    return (
                                        <div id="card-inner" key={curVal.id}>
                                            <CartOne {...curVal} />
                                        </div>
                                    )
                            })
                        }
                    </div>
                </div>
                {/* scrolling forwerd button  */}
                <RightScroll scrollCardInc={scrollCardInc} />
            </div>
        </div>
    )
}

export default FlashDeal