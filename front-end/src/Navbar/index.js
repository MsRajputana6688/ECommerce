import './style.css'
import React from 'react'
import NavCategory from './NavCategory'
import NavPage from './NavPage'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const Navbar = () => {
    const Page = useSelector(state => state.NavRedc)
    const [active, setActive] = useState(true)
    return (
        <nav>
            <div className='Navbar'>
                <div className="category-btn">
                    <div className="category" onClick={() => setActive(active ? false : true)}>
                        <span className="cat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                <rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <rect x="288" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                            </svg>
                        </span>
                        <span className="cat-text">Catogories</span>
                        <span className="arrow-d">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00000064" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </span>
                    </div>
                    {active ? <NavCategory /> : ""}
                </div>
                <div className="nav">
                    {
                        Page.map((value) => {
                            return <NavPage key={value.id} {...value} />
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar