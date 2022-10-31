import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'
import Prodect_main from './Prodect_main';

const Product = () => {
    const Location = useLocation();
    return (
        <div className='container'>
            <Prodect_main Location={Location} />
        </div>
    )
}

export default Product