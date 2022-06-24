
import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { getNewOrders, getLastOrderId } from '../../API/api';

function* onGetNewOrders(action) {
    try {
        const response = yield getNewOrders(action.lastOrderId);
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

function* watchGetLastOrderId() {
    yield takeEvery(actionTypes.GETLASTORDERID, onGetLastOrderId);
}

function* watchGetNewOrders() {
    yield takeEvery(actionTypes.GETNEWORDERS, onGetNewOrders);
}

export default function* ordersSagas() {
    yield all([
        watchGetNewOrders(),
        watchGetLastOrderId()
    ]);
}