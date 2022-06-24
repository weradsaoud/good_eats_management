import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    orders: [],
    newOrders: [],
    lastOrderId: 0
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.SAVELASTORDERID:
            console.log('from reducer lastOrderId: ', action.lastOrderId);
            return {
                ...state,
                lastOrderId: action.lastOrderId
            }
        case actionsTypes.SAVENEWORDERS:
            console.log('newOrders: ', action.newOrders);
            // let newOrders = [...action.newOrders];
            // let newOrdersIds = newOrders.map((newOrder, idx) => {
            //     return newOrder.id;
            // });
            // let lastOrderId = Math.max(...newOrdersIds);
            return {
                ...state,
                newOrders: [...action.newOrders]
            }
        default:
            break;
    }
    return state;
};

export default logInReducer;