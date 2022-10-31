const initialStates = {
    AddToCart: JSON.parse(localStorage.getItem('AddToWish')),
    // item: Prodect,
    // DisPrice: 0,
    // totalAmount: 0,  // total Amount of product
    // totalItem: 0, // total  product
}

const AddToWish = (state = initialStates, action) => {
    switch (action.type) {
        case 'ADD_TO_WISH': {
            if (!state.AddToCart) {
                localStorage.setItem('AddToWish', JSON.stringify([action.payload]))
                return {
                    ...state,
                    AddToCart: action.payload,
                }
            } else {
                let inConfirm = true;
                const oldWishlist = JSON.parse(localStorage.getItem('AddToWish'));
                oldWishlist.map((val) => {
                    if (action.payload.id === val.id) {
                        inConfirm = false;
                    }
                })
                inConfirm ? localStorage.setItem('AddToWish', JSON.stringify([...oldWishlist, action.payload])) : localStorage.setItem('AddToWish', JSON.stringify(oldWishlist))
                return {
                    ...state,
                    AddToCart: inConfirm ? [...oldWishlist, action.payload] : oldWishlist,
                }
            }
        }
    }
    return state
}
export default AddToWish