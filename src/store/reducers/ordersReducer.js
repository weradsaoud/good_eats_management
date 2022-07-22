import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    gettingOrders: true,
    orders: [],
    newOrders: [],
    lastOrderId: 0,

    expandedOrderId: false,
    isNotificationListOpen: false,
    isOrderReadyRequestSend: false
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionsTypes.SENDORDERREADYREQUEST:
            return {
                ...state,
                isOrderReadyRequestSend: true
            }
        case actionsTypes.ORDERREADYFAILED:
            return {
                ...state,
                isOrderReadyRequestSend: false
            }

        case actionsTypes.CLOSENOTIFICATIONLISTOPEN:
            return {
                ...state,
                isNotificationListOpen: false
            };
        case actionsTypes.OPENNOTIFICATIONLISTOPEN:
            return {
                ...state,
                isNotificationListOpen: true
            }
        case actionsTypes.SETOPENEDORDERID:
            return {
                ...state,
                expandedOrderId: action.orderId
            }
        case actionsTypes.SAVENEWORDERS:
            // console.log('newOrder: ', action.newOrder);
            // let newOrders_ = state.newOrders.filter((newOrder) => { return true });
            // newOrders_.push(...action.newOrders);
            return {
                ...state,
                newOrders: [...action.newOrders],
                orders: [...action.newOrders],
                isOrderReadyRequestSend: false
            }
        case actionsTypes.SAVEORDERSLOCALLY:

            return {
                ...state,
                gettingOrders: false,
                orders: [...action.orders],
                newOrders: [...action.orders],
                isOrderReadyRequestSend: false
            }
        default:
            break;
    }
    return state;
};

export default logInReducer;