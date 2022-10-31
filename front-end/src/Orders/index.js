import React from 'react'
import TrackList from '../Component/userDashbord/TrackList'
import OrderItem from './Order'

const Order = () => {
    return (
        <div className='container mt-40 pt-10 mb-40'>
            <div className="Dashboard">
                <TrackList />
                <OrderItem />
            </div>
        </div>
    )
}

export default Order
