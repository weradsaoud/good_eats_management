import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { fetchStoresCategories } from '../../API/api';


function* onGetStoresCategories(action) {
    try {
        const response = yield fetchStoresCategories();
        if (response.status == 200) {
            console.log('storescategories: ', response.data);
            yield put({ type: actionTypes.SAVE_STORESCATEGORIES_LOCALLY, storesCategories: response.data.map(cate => { return { id: cate.id.toString(), name: cate.name } }) });
        }
    } catch (error) {
        if (error.response.status == 500) {

        }
    }
}


function* watchGetStoresCategories() {
    yield takeEvery(actionTypes.GET_STORESCATEGORIES, onGetStoresCategories);
}

export default function* storesCategoriesSagas() {
    yield all([watchGetStoresCategories()]);
}