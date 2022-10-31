import React from 'react'
import ViewAllCart from '../../Component/BTN/ViewAllCart'
import CartThree from '../../Component/Cart/CartThree'
import NewProduct from '../../Redux/DataBase/NewProdect'

const NewArrival = () => {
    return (
        <div className='container'>
            <div className="container-header mt-20">
                <div className="header-title">
                    <div className="header-title-icon mr-8">
                        <img src="./assets/NewA.svg" alt="asd" />
                    </div>
                    <div className="header-title-name mb-5">New Arrivals</div>
                </div>
                <ViewAllCart />
            </div>
            <div className="grid-container cart-3-container cart-bg mt-5">
                {
                    NewProduct.map((curVal, ind) => {
                        return <CartThree key={ind} {...curVal} />
                    })
                }
            </div>
        </div>
    )
}

export default NewArrival