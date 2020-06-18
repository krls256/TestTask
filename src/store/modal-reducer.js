const modalReducer = (state = false, actions) => {
    if (actions.type === 'MODAL') {
        return actions.payload;
    }
    return state
}
export default modalReducer;