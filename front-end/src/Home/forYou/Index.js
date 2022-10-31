import React from 'react'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import CartOne from '../../Component/Cart/CartOne'
import './style.css'
import { useSelector } from 'react-redux'
const ForYou = () => {
    const { item } = useSelector(state => state.DataRedc)
    return (
        <div className='container mt-40'>
            <div className="container-header mt-20">
                <div className="header-title">
                    <div className="header-title-name mb-5">More For You</div>
                </div>
                <ViewAllCart />
            </div>
            <div className="cart-for-you">
                {
                    item.map((CurElem, ind) => {
                        return <div id="cart-for-you" key={ind}>
                            <CartOne  {...CurElem} />
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default ForYou