import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    gettingOrders: true,
    orders: [],
    newOrders: [],
    lastOrderId: 0
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.SAVENEWORDERS:
            console.log('newOrder: ', action.newOrder);
            let newOrders_ = state.newOrders.filter((newOrder) => { return true });
            newOrders_.push(...action.newOrders);
            return {
                ...state,
                newOrders: newOrders_
            }
        case actionsTypes.SAVEORDERSLOCALLY:

            return {
                ...state,
                gettingOrders: false,
                orders: [...action.orders]
            }
        default:
            break;
    }
    return state;
};

export default logInReducer;