import React from 'react'
import { useState } from 'react'
import TrackList from '../Component/userDashbord/TrackList'
import ItemList from './ItemList'

const WishList = () => {
    const [list, SetList] = useState({
        Order: false,
        Wishlist: true,
        Support: false,
        Profile: false,
        Addresses: false,
        Payment: false
    })
    return (
        <div className='container mt-40 pt-10 mb-40'>
            <div className="Dashboard">
                <TrackList {...list} />
                <ItemList />
            </div>
        </div>
    )
}

export default WishList
