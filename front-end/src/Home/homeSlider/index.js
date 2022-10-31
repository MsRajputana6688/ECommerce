import React, { useState } from 'react'
import './style.css'
import SliderCard from './SliderCard'
import { useSelector } from 'react-redux'
import NavCategory from '../../Navbar/NavCategory'

const Slider = () => {
    const AllData = useSelector(state => state.DataRedc)
    const [active, setActive] = useState(1);

    const clickEvent = (event) => {
        let sliderLayer = document.querySelector('#sliderLayer');
        setActive(event)
        sliderLayer.scrollLeft = (event * sliderLayer.clientWidth) - sliderLayer.clientWidth;
    }
    // ScollEvent 
    const ScollEvent = (event) => {
        let data = (event.target.scrollLeft) / (event.target.clientWidth)
        setActive(Math.round(data + 1))
    }

    let list = AllData.item.filter((curElem) => {
        if (curElem.Frist_Offer) {
            return curElem
        }
    })

    return (
        <div className="slider-main-container" >
            <div className="slider-container">
                <div className="slider-main">   
                    <div className="slider-show">
                        {/* Slider */}
                        <div className="slider-layer" id='sliderLayer' onScroll={ScollEvent}>
                            {
                                list.map((curElem, ind) => {
                                    if (curElem.Frist_Offer) {
                                        return (
                                            <SliderCard key={ind} {...curElem} ind={ind + 1} />
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="slider-btn-container">
                        {
                            list.map((curElem, ind) => {
                                if (curElem.Frist_Offer) {
                                    return (
                                        <button key={ind}
                                            id={ind + 1}
                                            onClick={() => clickEvent(ind + 1)}
                                            className={(active == ind + 1) ? 's-btn active' : 's-btn'}>
                                            <span></span>
                                        </button>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Slider