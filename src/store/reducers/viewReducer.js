import * as actionsTypes from '../actions/actionsTypes';
import {Views} from '../../globals/views';

const initialState = {
    view: Views.LOGIN
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.LOGIN_SUCCESS:
            return {
                ...state,
                view: Views.DASHBOARD
            };

        default:
            break;
    }
    return state;
};

export default viewReducer;