import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    orders: [],
    newOrders: [],
    lastOrderId: 0
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.SAVENEWORDERS:
            console.log('newOrder: ', action.newOrder);
            let newOrders_ = state.newOrders.filter((newOrder) => { return true });
            newOrders_.push(action.newOrder);
            return {
                ...state,
                newOrders: newOrders_
            }
        default:
            break;
    }
    return state;
};

export default logInReducer;