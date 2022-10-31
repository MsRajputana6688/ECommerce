import './style.css'
import Categories from './Categories'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeadCate } from '../Redux/Action'
import { NavLink } from 'react-router-dom'
import AutherInfo from '../LoginSystem'
const FixHeader = ({ setShowAside }) => {

    const mystate = useSelector(state => state.headRedc);
    const { totalItem } = useSelector(state => state.DataRedc)
    const Dispatch = useDispatch()

    // toggle CategoriesList 
    const [Active, setActive] = useState(false);
    window.addEventListener('click', (event) => {
        if (event.target.className !== 'CurcatToggle') {
            setActive(false)
        }
    })

    // toggle CategoriesList 
    const [FromState, setFromState] = useState(false);
    window.addEventListener('click', (event) => {
        if (event.target.className !== 'CurcatToggle') {
            setActive(false)
        }
    })

    return (
        <>
            <div className="FixHeader">
                <div className="container Fix-Header">
                    {/* left logo */}
                    <NavLink to='/'>
                        <div className='fix-logo'>
                            iTrust
                        </div>
                    </NavLink>

                    {/* search middle  */}
                    <div className='search-box'>
                        <div className="search">
                            <div className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <path fill="#00000064" d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                                </svg>
                            </div>
                            <input type="text" id='search' placeholder='Search and Hit Enter' />
                            <div className="search-Categories">
                                <div className="Categories">
                                    <div className="corrent-Categories" >
                                        <span>{mystate.Category}</span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00000064" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </span>
                                        <div className="CurcatToggle" onClick={() => setActive(Active ? false : true)} ></div>
                                    </div>
                                    <div className={Active ? 'Categories-list active' : 'Categories-list'}>
                                        {
                                            Categories.map((val) => {
                                                return (
                                                    <div className="Category-list"
                                                        onClick={() => { Dispatch(HeadCate(val.id)) }}
                                                        key={val.id}>{val.Category}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right  user */}
                    <div className='user-data'>
                        <div className="data">
                            <div className="user-data-inform" onClick={() => { setFromState(FromState ? false : true) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" className="ionicon" viewBox="0 0 512 512">
                                    <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
                                </svg>
                            </div>
                        </div>
                        <div className="data" >
                            <div className="user-save-data" onClick={() => setShowAside(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" className="ionicon" viewBox="0 0 512 512">
                                    <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256" />
                                    <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                </svg>
                            </div>
                            <div className="noti" >
                                {totalItem}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                FromState ? <AutherInfo setFromState={setFromState} /> : ''
            }
        </>
    )
}

export default FixHeader