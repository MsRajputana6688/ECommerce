import React, { useState } from 'react'
import TrackList from '../Component/userDashbord/TrackList'
import AddressList from './AddressList'

const Address = () => {
    const [list, SetList] = useState({
        Order: false,
        Wishlist: false,
        Support: false,
        Profile: false,
        Addresses: true,
        Payment: false
    })
    return (
        <div className='container mt-40 pt-10 mb-40'>
            <div className="Dashboard">
                <TrackList {...list} />
                <AddressList />
            </div>
        </div>
    )
}

export default Address
