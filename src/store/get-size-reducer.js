const getSizeReducer = (state = 6, action) => {
    switch(action.type) {
        case 'CHANGE_SIZE': {
            if (state + 6 <= action.payload) {
                return state + 6;
            } else {
                return action.payload
            }
        }
        case 'RESTART': return 6;
        break;
        default: return state
    }
}

export default getSizeReducer