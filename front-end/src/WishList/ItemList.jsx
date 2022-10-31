import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartOne from '../Component/Cart/CartOne'
const ItemList = () => {
    const { AddToCart } = useSelector(state => state.AddToWish)
    return (
        <div className='D-container'>
            <div className="D-heading">
                <div className="icon">
                    <img src="./Assets/svg/Cart2.svg" alt="" className='svg-height' />
                </div>
                <div className='pl-10'>My Orders</div>
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
