const positionReduser = (state = null, actions) => {
    if (actions.type === 'POSITION') {
        return actions.payload
    }
    return state
}

export default positionReduser;