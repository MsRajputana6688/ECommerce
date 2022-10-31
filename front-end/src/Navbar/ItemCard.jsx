import React, { useState, useEffect } from 'react'

const ItemCard = ({ name, item }) => {
    const [items, setItems] = useState(false)
    useEffect(() => {
        if (item) {
            setItems(true)
        }
    }, [item])
    return (
        <div className="nav-child-cat">
            <div className="nav-child-cat-name">
                <span className="name">{name}</span>
                {
                    items ? <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" />
                        </svg>
                    </span> : ''
                }
            </div>
            {
                items ? <div className='nav-child-item'>
                    {
                        // console.log(item)
                        item.map((val, inx) => {
                            return <div className="nav-child-item-name" key={inx}>{val} </div>
                        })
                    }
                </div> : ""
            }

        </div>
    )
}

export default ItemCard