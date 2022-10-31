import Prodect from "../DataBase/Prodect"
const initialStates = {
    item: Prodect,
    DisPrice: 0,
    AddToCart: JSON.parse(localStorage.getItem('AddToCart')),
    totalAmount: 0,  // total Amount of product
    totalItem: 0, // total  product
}

// get total price Amount and Prodect Amount 
const TotalAmount = (event) => {
    const totalItem = event.length
    let { totalAmount } = event ? event.reduce((accum, carElem) => {
        let { Amount, price, Discount } = carElem;
        accum.totalAmount += Amount * Math.floor(price - (price / 100) * Discount);
        return accum
    }, { totalAmount: 0 }) : 0;
    return ([totalAmount, totalItem])
}

const DataRedc = (state = initialStates, action) => {
    switch (action.type) {
        case 'CLEAR_ALL': {
            localStorage.clear()
            return {
                ...state,
                totalItem: 0,
                totalAmount: 0,
                AddToCart: JSON.parse(localStorage.getItem('AddToCart')),
            }
        }
        // Add To Cart 
        case 'ADD_TO_CART': {
            if (!state.AddToCart) {
                localStorage.setItem('AddToCart', JSON.stringify([action.payload]));
                let TotalCost = TotalAmount([action.payload])
                return {
                    ...state,
                    AddToCart: [action.payload],
                    totalAmount: TotalCost[0],
                    totalItem: TotalCost[1],
                };
            }
            if (state.AddToCart) {
                const oldData = JSON.parse(localStorage.getItem('AddToCart'))
                let confirm = true;
                oldData.map((value) => {
                    if (value.id === action.payload.id) {
                        confirm = false
                    }
                })
                confirm ? localStorage.setItem('AddToCart', JSON.stringify([...oldData, action.payload])) : localStorage.setItem('AddToCart', JSON.stringify(oldData));

                let TotalCost = confirm ? TotalAmount([...oldData, action.payload]) : TotalAmount(oldData)
                return {
                    ...state,
                    AddToCart: confirm ? [...oldData, action.payload] : oldData,
                    totalAmount: TotalCost[0],
                    totalItem: TotalCost[1],
                };
            }
        }

        //Cart TO Cart  Increament individual Prodect
        case 'INCREMENT': {
            let oldData = JSON.parse(localStorage.getItem('AddToCart'))
            let newData = oldData.map((CurVal) => {
                if (CurVal.id === action.payload) {
                    return {
                        ...CurVal,
                        AmountPrice: CurVal.AmountPrice + CurVal.price,
                        Amount: CurVal.Amount + 1,
                    }
                }
                return { ...CurVal }
            })
            let TotalCost = TotalAmount(newData)
            localStorage.setItem('AddToCart', JSON.stringify(newData))
            return {
                ...state,
                AddToCart: newData,
                totalAmount: TotalCost[0],
                totalItem: TotalCost[1],
            }
        }

        //Cart TO Cart  Decrement individual Prodect
        case 'DECREMENT': {
            let oldData = JSON.parse(localStorage.getItem('AddToCart'))
            let newData = oldData.map((CurVal) => {
                if (CurVal.id === action.payload && CurVal.Amount > 1) {
                    return {
                        ...CurVal,
                        AmountPrice: CurVal.AmountPrice - CurVal.price,
                        Amount: CurVal.Amount - 1,
                    }
                }
                return { ...CurVal }
            })
            let TotalCost = TotalAmount(newData)
            localStorage.setItem('AddToCart', JSON.stringify(newData))
            return {
                ...state,
                AddToCart: newData,
                totalAmount: TotalCost[0],
                totalItem: TotalCost[1],
            }
        }


        // Remove Individual Product from Add-To-Cart 
        case 'REMOVE_CART': {
            let NewList = state.AddToCart ? state.AddToCart.filter((curElem) => {
                if (curElem.id !== action.payload) {
                    return curElem;
                }
            }) : ''
            let TotalCost = TotalAmount(NewList)
            localStorage.setItem('AddToCart', JSON.stringify(NewList));
            return {
                ...state,
                AddToCart: NewList,
                totalAmount: TotalCost[0],
                totalItem: TotalCost[1],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}
export default DataRedc