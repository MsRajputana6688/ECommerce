import React from 'react'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import './style.css'
import CartFour from './CartFour'
import LeftScroll from '../../Component/LeftScroll'
import RightScroll from '../../Component/RightScroll'
import { useSelector } from 'react-redux'
const Big_Discount = () => {
    const { item } = useSelector(state => state.DataRedc)
    const scrollCardInc = () => {
        let BigDis_Scroll = document.getElementById('BigDis_Scroll');
        if ((BigDis_Scroll.clientWidth + 40) <= 648) {
            BigDis_Scroll.scrollBy((BigDis_Scroll.clientWidth / 2), 0)
        }
        else if ((BigDis_Scroll.clientWidth + 40) >= 648 && (BigDis_Scroll.clientWidth + 40) <= 948) {
            BigDis_Scroll.scrollBy((BigDis_Scroll.clientWidth / 4), 0)
        }
        else {
            BigDis_Scroll.scrollBy((BigDis_Scroll.clientWidth / 6), 0)
        }
    }
    const scrollCardDec = () => {
        let BigDis_Scroll = document.getElementById('BigDis_Scroll');
        if ((BigDis_Scroll.clientWidth + 40) <= 648) {
            BigDis_Scroll.scrollBy(-(BigDis_Scroll.clientWidth / 2), 0)
        }
        else if ((BigDis_Scroll.clientWidth + 40) >= 648 && (BigDis_Scroll.clientWidth + 40) <= 948) {
            BigDis_Scroll.scrollBy(-(BigDis_Scroll.clientWidth / 4), 0)
        }
        else {
            BigDis_Scroll.scrollBy(-(BigDis_Scroll.clientWidth / 6), 0)
        }
    }
    return (
        <div className='container mt-20'>
            <div className="container-header mt-20">
                <div className="header-title">
                    <div className="header-title-icon mr-8">
                        <img src="./assets/big.svg" alt="asd" />
                    </div>
                    <div className="header-title-name mb-5">Big Discounts</div>
                </div>
                <ViewAllCart />
            </div>
            <div className="relative-container" >
                <LeftScroll scrollCardDec={scrollCardDec} />
                <div className="Big_Discount" id='BigDis_Scroll'>
                    <div className="BigDis_Scroll"  >
                        {

                            item.map((value, inx) => {
                                if (value.Discount > 50) {
                                    return <CartFour key={inx} {...value} />
                                }
                            })
                        }
                    </div>
                </div>
                <RightScroll scrollCardInc={scrollCardInc} />
            </div>
        </div>
    )
}
export default Big_Discount