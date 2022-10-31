import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Page_Aside_Toggle } from '../../Redux/Action'

const TrackList = ({ Order, Wishlist, Support, Profile, Addresses, Payment }) => {
    const Dispatch = useDispatch();
    const { Toggle } = useSelector(state => state)
    const { AddToCart } = useSelector(state => state.AddToWish)
    window.addEventListener('click', (event) => {
        if (event.target.className === 'TrackList active') {
            Dispatch(Page_Aside_Toggle(false))
        }
    })
    return (
        <div className={Toggle ? 'TrackList active' : 'TrackList'}>
            <div id="trackList">
                <div className="TrackList-header">Dashboard</div>
                <div className="Dashboard-list">
                    <NavLink className={Order ? 'Dashboard-list-link active' : 'Dashboard-list-link'} to='/Orders'>
                        <div className="Dashboard-list-menu">
                            <div className="menu-icon">
                                <img src="./Assets/svg/Cart.svg" className='svg-height img2' alt="" />
                                <img src="./Assets/svg/Cart1.svg" className='svg-height img1' alt="" />
                            </div>
                            <div className="menu-name">Order</div>

                        </div>
                        <div className="Dashboard-menu-count">
                            4
                        </div>
                    </NavLink>
                    <NavLink className={Wishlist ? 'Dashboard-list-link active' : 'Dashboard-list-link'} to='/Wishlist'>
                        <div className="Dashboard-list-menu">
                            <div className="menu-icon">
                                <img src="./Assets/svg/wishlist.svg" className='svg-height img2' alt="" />
                                <img src="./Assets/svg/wishlist1.svg" className='svg-height img1' alt="" />
                            </div>
                            <div className="menu-name">Wishlist</div>

                        </div>
                        <div className="Dashboard-menu-count">
                            {
                                AddToCart.length
                            }
                        </div>
                    </NavLink>
                    <NavLink className={Support ? 'Dashboard-list-link active' : 'Dashboard-list-link'} to='/Support'>
                        <div className="Dashboard-list-menu">
                            <div className="menu-icon">
                                <img src="./Assets/svg/Tickets.svg" className='svg-height img2' alt="" />
                                <img src="./Assets/svg/Tickets1.svg" className='svg-height img1' alt="" />
                            </div>
                            <div className="menu-name">Support Tickets</div>

                        </div>
                        <div className="Dashboard-menu-count">
                            4
                        </div>
                    </NavLink>
                </div>

                <div className="TrackList-header mt-40 pt-40">Dashboard</div>
                <div className="Dashboard-list">

                    <NavLink className={Profile ? 'Dashboard-list-link active' : 'Dashboard-list-link'} to='/Profile'>
                        <div className="Dashboard-list-menu">
                            <div className="menu-icon">
                                <img src="./Assets/svg/User.svg" className='svg-height img2' alt="" />
                                <img src="./Assets/svg/User1.svg" className='svg-height img1' alt="" />
                            </div>
                            <div className="menu-name">Profile Info</div>

                        </div>
                        <div className="Dashboard-menu-count">
                            2
                        </div>
                    </NavLink>
                    <NavLink className={Addresses ? 'Dashboard-list-link active' : 'Dashboard-list-link'} to='/Addresses'>
                        <div className="Dashboard-list-menu">
                            <div className="menu-icon">
                                <img src="./Assets/svg/Location.svg" className='svg-height img2' alt="" />
                                <img src="./Assets/svg/Location1.svg" className='svg-height img1' alt="" />
                            </div>
                            <div className="menu-name">Addresses</div>

                        </div>
                        <div className="Dashboard-menu-count">
                            14
                        </div>
                    </NavLink>
                    <NavLink className={Payment ? 'Dashboard-list-link active' : 'Dashboard-list-link'} to='/Payment-Method'>
                        <div className="Dashboard-list-menu">
                            <div className="menu-icon">
                                <img src="./Assets/svg/payment.svg" className='svg-height img2' alt="" />
                                <img src="./Assets/svg/payment1.svg" className='svg-height img1' alt="" />
                            </div>
                            <div className="menu-name">Payment Method</div>

                        </div>
                        <div className="Dashboard-menu-count">
                            8
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TrackList
