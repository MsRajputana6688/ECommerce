const Toggle = (state = false, action) => {
    if (action.type === "ASIDE_PAGE_TOGGLE") {
        return action.payload
    }
    return state
}
export default Toggle