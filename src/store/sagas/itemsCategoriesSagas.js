import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { fetchItemsCategories, getStores, uploadItemsCategories } from '../../API/api';

function* onGetItemsCategories(action) {
    try {
        const response = yield fetchItemsCategories();
        if (response.status == 200) {
            console.log('Itemscategories: ', response.data);
            yield put({ type: actionTypes.SAVE_ITEMSCATEGORIES_LOCALLY, itemsCategories: response.data.map(cate => { return { storeId: cate.store_id.toString(), storeName: cate.store_name, cateId: cate.item_category_id, cateName: cate.item_category_name, active: cate.active } }) });
        }
    } catch (error) {
        if (error.response.status == 500) {

        }
    }
}

function* onGetStores() {
    try {
        const response = yield getStores();
        console.log('response from onGetStores: ', response);
        if (response.status == 200) {
            console.log('response.status: ', response.status);
            yield put({
                type: actionTypes.SAVESTORES_ITEMSCATEGORIES, stores: response.data.map((store) => {
                    return {
                        id: store.id,
                        name: store.name
                    };
                })
            });
        }
    } catch (error) {
        console.log('error in onGetStores: ', error);
    }
}

function* onUploadItemsCategories(action) {
    try {
        const response = yield uploadItemsCategories(action.toAddItemsCategories);
        if (response.status == 200) {
            yield put({ type: actionTypes.ITEMSCATEGORIESUPLOADEDSUCCESSFULLY });
        }
    } catch (error) {
        yield put({ type: actionTypes.ITEMSCATEGORIESUPLOADEFAILED });
    }
}

function* watchGetItemsCategories() {
    yield takeEvery(actionTypes.GET_ITEMSCATEGORIES, onGetItemsCategories);
}
function* watchGetStores() {
    yield takeEvery(actionTypes.GETSTORES_ITEMSCATGORIES, onGetStores);
}

function* watchUploadItemsCategories() {
    yield takeEvery(actionTypes.UPLOADITEMSCATEGORIES, onUploadItemsCategories)
}

export default function* itemsCategoriesSagas() {
    yield all([watchGetItemsCategories(), watchGetStores(), watchUploadItemsCategories()]);
}