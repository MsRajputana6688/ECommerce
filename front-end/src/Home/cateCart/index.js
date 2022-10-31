import React from 'react'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import ChildCart from './ChildCart'
import './style.css'

const CarCart = () => {
    return (
        <div className='container pt-40'>
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
                    <div className="header-title-name mb-5">Categories</div>
                </div>
                <ViewAllCart />
            </div>

            <div className="cate-cart-contaier mt-10">
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
                <ChildCart />
            </div>
        </div>
    )
}

export default CarCart