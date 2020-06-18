import {combineReducers} from 'redux';

import usersListReducer from './users-list-reducer';
import getSizeReducer from './get-size-reducer';
import maxSizeReduser from './max-size-reducer';
import modalReducer from './modal-reducer';

export default combineReducers({
    usersList: usersListReducer,
    getSize: getSizeReducer,
    maxSize: maxSizeReduser,
    modal: modalReducer,
})