import React from 'react'
import './style.css'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import TopRateCart from './TopRateCart'
import { useSelector } from 'react-redux'
const TopRating = () => {
    const { item } = useSelector(state => state.DataRedc)
    return (
        <div className='container'>
            <div className="TopRating">
                <div className="col-top">
                    {/* heading  */}
                    <div className="container-header">
                        <div className="header-title">
                            <div className="header-title-icon mr-8">
                                <img src="./assets/ranking-1.svg" alt="" />
                            </div>
                            <div className="header-title-name mb-5">Top Ratings</div>
                        </div>
                        <ViewAllCart />
                    </div>
                    {/* cart  */}
                    <div className='TopRateCart'>
                        {
                            item.map((curVal) => {
                                if (curVal.star[4] === 1) {
                                    return <TopRateCart key={curVal.id} {...curVal} />
                                }
                            })
                        }
                    </div>
                </div>
                <div className="col-top">
                    {/* heading  */}
                    <div className="container-header">
                        <div className="header-title">
                            <div className="header-title-icon mr-8">
                                <img src="./assets/group.svg" alt="" />
                            </div>
                            <div className="header-title-name mb-2">Featured Brands</div>
                        </div>
                        <ViewAllCart />
                    </div>
                    {/* cart  */}
                    <div className='TopRateCart'>
                        {
                            item.map((curVal) => {
                                if (curVal.star[4] === 1) {
                                    return <TopRateCart key={curVal.id} {...curVal} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopRating