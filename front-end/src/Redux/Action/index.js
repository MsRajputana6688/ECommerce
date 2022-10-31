// change header category 
export const HeadCate = (event) => {
    return ({
        type: "CNHEADCATE",
        pyload: event,
    })
}

// add item in the AddToCart 
export const AddCart = (event) => {
    return ({
        type: "ADD_TO_CART",
        payload: event,
    })
}

// Decreament item amount 
export const Decreament = (event) => {
    return (
        {
            type: "DECREMENT",
            payload: event,
            list: JSON.parse(localStorage.getItem('item'))
        }
    )
}

// Inreament item amount 
export const Increament = (event) => {
    return (
        {
            type: "INCREMENT",
            payload: event,
        }
    )
}

// Clear AddToCart
export const clearCart = () => {
    return {
        type: "CLEAR_ALL",
    }
}

// remove cart 
export const RemoveCart = (event) => {
    return {
        type: "REMOVE_CART",
        payload: event,
    }
}

// GET TOTAL Amount of product in AddToCart
export const GetTotal = () => {
    return {
        type: "GET_TOTAL",
    }
}

// ------------------------------------------------------------
// WishList 
export const Add_To_Wish = (event) => {
    return {
        type: 'ADD_TO_WISH',
        payload: event,
    }
} 