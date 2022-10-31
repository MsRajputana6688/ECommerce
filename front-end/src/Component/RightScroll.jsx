import React from 'react'

const RightScroll = (props) => {
    return (
        <div className="next-btn scroll-btn" onClick={props.scrollCardInc}>
            <p className='scr-btn'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" /><script src=""></script>
                    </svg>
                </span>
            </p>
        </div>
    )
}

export default RightScroll