import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartOne from '../Component/Cart/CartOne'
import { Page_Aside_Toggle } from '../Redux/Action'
const ItemList = () => {
    const { AddToCart } = useSelector(state => state.AddToWish)
    const Dispatch = useDispatch()
    return (
        <div className='D-container'>
            <div className="D-heading">
                <div className="dl-head">
                    <div className="icon">
                        <img src="./Assets/svg/wishlist1.svg" alt="" className='svg-height' />
                    </div>
                    <div className='pl-10'>Wishlist</div>
                </div>
                <div className="dr-head" onClick={() => { Dispatch(Page_Aside_Toggle(true)) }}>
                    <img src="./Assets/svg/toggle.svg" alt="" className='svg-height' />
                </div>
            </div>
            <div className="cartRander mt-20">
                {
                    AddToCart ? AddToCart.map((CurVal) => {
                        return <CartOne key={CurVal.id} {...CurVal} />
                    }) : ''
                }
            </div>
        </div>
    )
}

export default ItemList
