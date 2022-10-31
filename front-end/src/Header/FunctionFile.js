export const Reducer = (state, action) => {
    if (action.type === 'lang1') {
        return {
            ...state,
            curIndex1: action.payload - 1
        }
    }
    if (action.type === 'lang2') {
        return {
            ...state,
            curIndex2: action.payload - 1
        }
    }
    if (action.type === 'show1') {
        return {
            ...state,
            show1: state.show1 ? false : true
        }
    }
    if (action.type === 'show2') {
        return {
            ...state,
            show2: state.show2 ? false : true
        }
    }
    return state
}