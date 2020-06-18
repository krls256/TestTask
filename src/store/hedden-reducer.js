const hiddenReducer = (store = true, actions) => {
   return actions.type === 'HIDE' ? actions.payload: store;
}

export default hiddenReducer;