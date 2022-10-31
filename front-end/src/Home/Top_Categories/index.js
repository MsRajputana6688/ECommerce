import React from 'react'
import TopCart from './TopCart'
import './style.css'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import RightScroll from '../../Component/RightScroll'
import LeftScroll from '../../Component/LeftScroll'
import { useSelector } from 'react-redux'
const TopCategories = () => {
    const { item } = useSelector(state => state.DataRedc)
    const scrollCardDec = () => {
        const Scrolling = document.getElementById('top_cat_cart');
        const innser = document.getElementById('top_cat_cart_scroll');
        Scrolling.scrollBy(-(innser.clientWidth), 0)
    }
    const scrollCardInc = () => {
        const Scrolling = document.getElementById('top_cat_cart');
        const innser = document.getElementById('top_cat_cart_scroll');
        Scrolling.scrollBy(innser.clientWidth, 0)
    }

    return (
        <div className='container'>
            <div className="container-header mt-20">
                <div className="header-title">
                    <div className="header-title-icon mr-8 " style={{ 'width': '24px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="#e94560" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="#e94560" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="#e94560" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <circle cx="380" cy="380" r="92" fill="none" stroke="#e94560" strokeLinecap="round" strokeLinejoin="round" y="303" strokeWidth="32">
                            </circle>
                        </svg>
                    </div>
                    <div className="header-title-name mb-5">Top Categories</div>
                </div>
                <ViewAllCart />
            </div>
            <div className="top-cat-cart-container">
                {/* left btn  */}
                <LeftScroll scrollCardDec={scrollCardDec} />
                {/* container card  */}
                <div className="top-cat-cart" id='top_cat_cart'>
                    <div className="top-cat-cart-scroll" id='top_cat_cart_scroll'>
                        {
                            item.map((CurVal) => {
                                if (CurVal.Order > 20)
                                    return <TopCart key={CurVal.id} {...CurVal} />
                            })
                        }
                    </div>
                </div>
                {/* right btn  */}
                <RightScroll scrollCardInc={scrollCardInc} />
            </div>
        </div>
    )
}

export default TopCategories