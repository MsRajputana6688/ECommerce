import React from 'react'

const LeftScroll = (props) => {
    return (
        <div className='pre-btn scroll-btn' onClick={props.scrollCardDec}>
            <p className='scr-btn'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
                    </svg>
                </span>
            </p>
        </div>
    )
}

export default LeftScroll