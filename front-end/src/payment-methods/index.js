import React from 'react'
import { useState } from 'react'
import TrackList from '../Component/userDashbord/TrackList'
import PayList from './PayList'

const PayMethod = () => {
    const [list, SetList] = useState({
        Order: false,
        Wishlist: false,
        Support: false,
        Profile: false,
        Addresses: false,
        Payment: true
    })
    return (
        <div className='container mt-40 pt-10 mb-40'>
            <div className="Dashboard">
                <TrackList {...list} />
                <PayList />
            </div>
        </div>
    )
}

export default PayMethod
