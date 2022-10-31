import './style.css'
import React, { memo } from 'react'
import Slider from './homeSlider'
import FlashDeal from './Flash-Deal'
import TopCategories from './Top_Categories'
import TopRating from './Top_Rating'
import NewArrival from './New_Arrivals'
import Big_Discount from './Big_Discounts'
import CartRoom from './CartRoom'

import Cars from '../Redux/DataBase/Cars'
import Mobile from '../Redux/DataBase/Mobile'
import ForYou from './forYou/Index'
import CateCart from './cateCart'
// function     
const Home = () => {

    return (
        <main>
            <Slider />
            <FlashDeal />
            <TopCategories />
            <TopRating />
            <NewArrival />
            <Big_Discount />
            <CartRoom item={Cars} />
            <CartRoom item={Mobile} />
            <CateCart />
            <ForYou />
        </main>
    )
}

export default memo(Home)