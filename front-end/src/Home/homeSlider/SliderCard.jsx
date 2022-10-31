import React from 'react'

const SliderCard = ({ ind, detaile, TopOfferPic }) => {
    return (
        <div className='slider' id={ind} >
            <div className="slider-detaile">
                <div className="slider-heading">
                    50% Off on your  first shopping
                </div>
                <div className="slider-para">
                    {detaile}
                </div>
                <div className="slider-button">
                    <button className='btn '>
                        Visit Collections
                    </button>
                </div>
            </div>
            <div className="slider-img">
                <img src={TopOfferPic} alt="" />
            </div>
        </div>
    )
}

export default SliderCard