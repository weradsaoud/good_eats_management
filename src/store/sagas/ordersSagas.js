
import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { getNewOrders, getLastOrderId, getOrders } from '../../API/api';

function* onGetNewOrders(action) {
    try {
        const response = yield getNewOrders(action.lastOrderId);
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

function* watchGetLastOrderId() {
    yield takeEvery(actionTypes.GETLASTORDERID, onGetLastOrderId);
}

function* watchGetNewOrders() {
    yield takeEvery(actionTypes.GETNEWORDERS, onGetNewOrders);
}

function* watchOrdersDidMount() {
    yield takeEvery(actionTypes.ORDERSDIDMOUNT, onOrdersDidMount);
}

export default function* ordersSagas() {
    yield all([
        watchOrdersDidMount(),
        watchGetNewOrders(),
        watchGetLastOrderId()
    ]);
}