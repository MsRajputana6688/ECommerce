import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCart } from '../../Redux/Action'
const Prodect_main = ({ Location }) => {
    const Dispatch = useDispatch()
    const Data = JSON.parse(Location.state.item);
    const { name, Mainimg, CartImg, brand, price, Discount, star, RateNumber, Stock, Sold } = Data;
    const SellPrice = Math.floor(price - (price / 100) * Discount);
    return (
        <div className='Prodect_main'>
            <div className="Prodect_main_div">
                <div className="Prodect_main_img">
                    <img src={Mainimg} alt="" />
                </div>
                <div className="Prodect_child_img">
                    <div className="child_img" >
                        <img src={CartImg} alt="" />
                    </div>
                    <div className="child_img" >
                        <img src={CartImg} alt="" />
                    </div>
                    <div className="child_img" >
                        <img src={CartImg} alt="" />
                    </div>
                </div>
            </div>  
            <div className="Prodect_main_div">
                <div className="MP_name"> {name}</div>
                <div className="MP_brand">Brand : <span>{brand}</span></div>
                <div className="MP_rate">Rated :
                    <div className="MP_rate_img">
                        {
                            star.map((value, ind) => {
                                if (value === 1)
                                    return <img key={ind} src="./assets/svg/Star.svg" alt="" />
                                else
                                    return <img key={ind} src="./assets/svg/Star-empty.svg" alt="" />
                            })
                        }
                    </div>
                    <div className="RateNumber">
                        ({RateNumber})
                    </div>
                </div>
                <div className="MP_price">${SellPrice} <span> ${price}</span></div>
                <div className="MP_Stock"> {(Stock) ? "Stock is Availble" : "Stock is Not Availble"}</div>
                <div className="MP_Button">
                    <button onClick={() => Dispatch(AddCart(Data))}>
                        Add to Cart
                    </button>
                </div>
                <div className="MP_sold">Sold by : <span>{Sold}</span></div>
            </div>
        </div>
    )
}

export default Prodect_main