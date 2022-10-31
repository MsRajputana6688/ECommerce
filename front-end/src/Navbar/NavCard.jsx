import React, { memo, useContext } from 'react'
import ItemCard from './ItemCard'
import { useState } from 'react'
import { useEffect } from 'react'

const NavCard = ({ id, icon, category, children }) => {
    const [child, setChild] = useState(false)
    useEffect(() => {
        if (children) {
            setChild(true)
        }
    }, [children])
    return (
        <div className="nav-cat-main">
            <div className="nav-cat-parent" >
                <div className="nav-cat-item">
                    <img className='nav-cat-logo' src={icon} alt="" />
                    <span className="nav-cat-name">{category}</span>
                </div>
                {
                    child ? <div className="nav-cat-parent-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" />
                        </svg>
                    </div> : ""
                }
            </div>
            {
                child ? <div className="nav-cat-child">
                    <div className="nav-cat-childs">
                        {
                            children.map((curVal) => {
                                return <ItemCard key={curVal.id} {...curVal} />
                            })
                        }
                    </div>
                </div> : ""
            }


        </div>
    )
}

export default memo(NavCard)