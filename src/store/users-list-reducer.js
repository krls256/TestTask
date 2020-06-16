const usersListReducer = (state = [], action) => {
    switch (action.type) {
        case "MORE": return action.payload;
        break;
        case "UNSHIFT": return store.unshift(action.payload);
        default: return state;
    }
}

export default usersListReducer;