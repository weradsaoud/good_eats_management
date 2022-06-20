import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    orders: [],
    newOrders: [],
    lastOrderId: 0
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.LOAD_CONFIG:
           
        default:
            break;
    }
    return state;
};

export default logInReducer;