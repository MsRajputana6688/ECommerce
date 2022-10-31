import React, { memo } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export const BottemNav = () => {
    const { totalItem } = useSelector(state => state.DataRedc)
    return (
        <>
            <div className="BottemNav">
                {/* Category  */}
                <div className="card-btn">
                    <NavLink to='/'>
                        <button type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            </svg>
                            <span className='b-text'>
                                Home
                            </span>
                        </button>
                    </NavLink>
                </div>

                {/* Category  */}
                <div className="card-btn">
                    <button type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <rect x="288" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                        </svg>
                        <span className='b-text'>
                            Category
                        </span>
                    </button>
                </div>


                {/* cart  */}
                <div className="card-btn">
                    <NavLink to='./AddToCart'>
                        <button type='button'>
                            <div id="cart">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <path d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <path d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                </svg>
                                <span id='noti'>
                                    {totalItem}
                                </span>
                            </div>
                            <span className='b-text'>
                                Cart
                            </span>
                        </button>
                    </NavLink>
                </div>

                {/* user Account  */}
                <div className="card-btn">
                    <button type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
                        </svg>
                        <span className='b-text'>
                            Account
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default memo(BottemNav)
