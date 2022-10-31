import React from 'react'
import { useState } from 'react'
import TrackList from '../Component/userDashbord/TrackList'
import UserProfile from './UserProfile'

const Profile = () => {
    const [list, SetList] = useState({
        Order: false,
        Wishlist: false,
        Support: false,
        Profile: true,
        Addresses: false,
        Payment: false
    })
    return (
        <div className='container mt-40 pt-10 mb-40'>
            <div className="Dashboard">
                <TrackList {...list} />
                <UserProfile />
            </div>
        </div>
    )
}

export default Profile
