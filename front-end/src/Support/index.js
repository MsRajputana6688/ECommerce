import React from 'react'
import { useState } from 'react'
import TrackList from '../Component/userDashbord/TrackList'
import SupportArea from './SupportArea'

const Support = () => {
    const [list, SetList] = useState({
        Order: false,
        Wishlist: false,
        Support: true,
        Profile: false,
        Addresses: false,
        Payment: false
    })
    return (
        <div className='container mt-40 pt-10 mb-40'>
            <div className="Dashboard">
                <TrackList {...list} />
                <SupportArea />
            </div>
        </div>
    )
}

export default Support
