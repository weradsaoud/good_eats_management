
import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { getOrders } from '../../API/api';

function* onGetOrders() {
    try {
        const response = yield getOrders();
        if (response.status == 200) {

        }
    } catch (error) {

    }
}

function* onGetLastOrderId(action){
    const response = yield getLastOrderId();
}

function* watchGetLastOrderId() {
    yield takeEvery(actionTypes.GETLASTORDERID, onGetLastOrderId);
}

function* watchGetOrders() {
    yield takeEvery(actionTypes.GETSTORES, onGetOrders);
}

export default function* ordersSagas() {
    yield all([
        watchGetOrders(),
        watchGetLastOrderId()
    ]);
}