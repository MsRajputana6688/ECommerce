import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Child = ({ name, link, target }) => {
    const [list, setList] = useState(false)
    useEffect(() => {
        if (link != undefined) {
            setList(true)
        }
    }, [link])
    return (
        <div className="nav-sub-menu">
            <div className="link">
                {
                    list ? <span>{name}</span> : <NavLink to={target}>{name}</NavLink>
                }
                {
                    list ? <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                    </svg> : ''
                }

            </div>
            {
                list ?
                    <div className="nav-sub-item-menu">
                        <div className="nav-sub-item-list">
                            {
                                link.map((val, ind) => <NavLink key={ind} to={target[ind]}>{val}</NavLink>)
                            }
                        </div>
                    </div> : ''
            }
        </div>
    )
}
const NavPage = ({ category, child, target }) => {
    const [childs, setChild] = useState(false);
    useEffect(() => {
        if (child != undefined) {
            setChild(true)
        }
    }, [child])
    return (
        <div className="nav-item">
            {
                childs ? <div className='nav-link'>{category}</div> :
                    <NavLink to={target}>
                        <span href='#' className='nav-link'>{category}</span>
                    </NavLink>
            }
            {
                childs ? <div className="nav-sub-item">
                    {
                        child.map((curVal) => {
                            return <Child key={curVal.id} {...curVal} />
                        })
                    }
                </div> : ''
            }
        </div >
    )
}

export default NavPage