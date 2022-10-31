import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import NavCard from './NavCard'
const NavCategory = () => {
    const item = useSelector(state => state.NavCate)
    return (
        <div className='NavCategory'>
            <div className="nav-cat-catainer">
                {
                    item.map((curVal) => {
                        return (
                            <NavCard key={curVal.id} {...curVal} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NavCategory