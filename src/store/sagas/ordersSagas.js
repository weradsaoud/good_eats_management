
import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { getNewOrders, getLastOrderId, getOrders, orderReady } from '../../API/api';

function* onGetNewOrders(action) {
    try {
        const response = yield getNewOrders();
        console.log('newOrders response: ', response);
        if (response.status == 200) {
            if (response.data == 'no_new_orders') {

            } else {
                yield put({ type: actionTypes.SAVENEWORDERS, newOrders: response.data });
            }
        }
    } catch (error) {

    }
}

function* onGetLastOrderId(action) {
    const response = yield getLastOrderId();
    if (response.status == 200) {
        yield put({ type: actionTypes.SAVELASTORDERID, lastOrderId: response.data });
    }
}

function* onOrdersDidMount(action) {
    try {
        const response = yield getOrders();
        if (response.status == 200) {
            yield put({ type: actionTypes.SAVEORDERSLOCALLY, orders: response.data });
        }
    } catch (error) {
        console.log('Err: onOrdersDidMount: ', error);
    }
}

function* onOrderReady(action) {
    try {
        yield put({type: actionTypes.SENDORDERREADYREQUEST});
        const response = yield orderReady(action.orderId, action.notificationId);
        if (response.status == 200) {
            yield put({ type: actionTypes.GETNEWORDERS });
        }
    } catch (error) {
        console.log('ERR: onOrderReady: ', error);
        yield put({type: actionTypes.ORDERREADYFAILED})
    }
}

function* watchGetLastOrderId() {
    yield takeEvery(actionTypes.GETLASTORDERID, onGetLastOrderId);
}

function* watchGetNewOrders() {
    yield takeEvery(actionTypes.GETNEWORDERS, onGetNewOrders);
}

function* watchOrdersDidMount() {
    yield takeEvery(actionTypes.ORDERSDIDMOUNT, onOrdersDidMount);
}

function* watchOrderReady() {
    yield takeEvery(actionTypes.ORDERREADY, onOrderReady);
}

export default function* ordersSagas() {
    yield all([
        watchOrdersDidMount(),
        watchGetNewOrders(),
        watchGetLastOrderId(),
        watchOrderReady()
    ]);
}