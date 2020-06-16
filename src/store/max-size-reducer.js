const maxSizeReduser = (state = 6, action) => {
    if (action.type === 'MAX') {
        return action.payload;
    }
    return state
}
export default maxSizeReduser