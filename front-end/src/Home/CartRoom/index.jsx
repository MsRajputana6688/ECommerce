import React from 'react'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import './style.css'
import CartOne from '../../Component/Cart/CartOne'
const CartRoom = (props) => {
    return (
        <div className='container flex-main mt-40'>
            <div className="cart-cetogary-container">
                <div className="cartlist">
                    <div className="cartmenu">
                        <span className="icon"></span>
                        <span className="text">Zerrari</span>
                    </div>
                    <div className="cartmenu">
                        <span className="icon"></span>
                        <span className="text">Fesla</span>
                    </div>
                    <div className="cartmenu">
                        <span className="icon"></span>
                        <span className="text">Btw</span>
                    </div>
                    <div className="cartmenu">
                        <span className="icon"></span>
                        <span className="text">Boyota</span>
                    </div>
                    <div className="cartmenu">
                        <span className="icon"></span>
                        <span className="text">Gini</span>
                    </div>
                    <div className="cartmenu">
                        <span className="icon"></span>
                        <span className="text">Lord</span>
                    </div>
                </div>
                <div className="cartListBtn">
                    <button>View All Brands</button>
                </div>
            </div>
            <div className="cart-main-container">
                <div className="container-header">
                    <div className="header-title">
                        <div className="header-title-name"><span>Car</span></div>
                    </div>
                    <ViewAllCart />
                </div>
                <div className="cart-main">
                    <div className="cartRander">
                        {
                            props.item.map((value) => {
                                return (
                                    <div key={value.id} className="cart-div">
                                        <CartOne  {...value} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartRoom