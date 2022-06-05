import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import {
    createStore,
    deleteStore,
    getStores,
    updateStore_get,
    updateStore_post
} from '../../API/api';

function* onUploadStore(action) {
    try {
        const response = yield createStore(action.formData);
        console.log('response: ', response);
    } catch (error) {
        console.log('error.response: ', error.response);
    }

}

function* onGetStores(action) {
    try {
        const response = yield getStores();
        yield put({
            type: actionTypes.SAVE_STORES_LOCALLY, stores: response.data.map((store, index) => {
                return {
                    id: store.id,
                    store_cate_id: store.store_cate_id,
                    store_owner_id: store.store_owner_id,
                    store_cate_name: store.store_cate_name,
                    store_owner_name: store.store_owner_name,
                    name: store.name,
                    email: store.email,
                    phone: store.phone,
                    logo: store.logo,
                    cover: store.cover,
                    active: store.active,
                    description: store.description,
                    can_deliver: store.can_deliver,
                    deliver_minimum_spend: store.deliver_minimum_spend,
                    can_pickup: store.can_pickup,
                    pickup_minimum_spend: store.pickup_minimum_spend,
                    can_table_order: store.can_table_order,
                    table_oredr_minimum_spend: store.table_oredr_minimum_spend
                }
            })
        });
    } catch (error) {
        console.log('getStores error response: ', error.response);
    }
}

function* onDeleteStore(action) {
    yield put({ type: actionTypes.DELETEINGSTORE });
    try {
        const response = yield deleteStore(action.storeId);
        if (response.status == 200) {
            yield put({ type: actionTypes.STOREDELETEDSUCCESSFULLY });
            yield put({ type: actionTypes.GETSTORES });
        }
    } catch (error) {
        yield put({ type: actionTypes.DELETESTOREFAILED });
    }
}

function* onUpdateStoreGet(action) {
    yield put({ type: actionTypes.UPDATEINGSTORE_GET });
    try {
        const response = yield updateStore_get(action.toEditStoreId);
        if (response.status == 200) {
            let toEditStore = {
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone,
                numberOfTables: '15',//todo
                description: response.data.description,
                coverPhoto: response.data.cover,
                logoPhoto: response.data.logo,
                uploadCoverPhoto: null,
                uploadLogoPhoto: null,
                ownerId: response.data.store_owner_id,
                categoryId: response.data.store_cate_id,
                active: response.data.active,
                canDeliver: response.data.can_deliver,
                deliveryMinSpend: response.data.deliver_minimum_spend,
                canPickup: response.data.can_pickup,
                pickupMinSpend: response.data.pickup_minimum_spend,
                canTableOrder: response.data.can_table_order,
                tableOrderMinSpend: response.data.table_oredr_minimum_spend,
                saterday: (response.data.sat_from && response.data.sat_to),
                satFrom: response.data.sat_from,
                satTo: response.data.sat_to,
                sunday: (response.data.sun_from && response.data.sun_to),
                sunFrom: response.data.sun_from,
                sunTo: response.data.sun_to,
                monday: response.data.mon_from && response.data.mon_to,
                monFrom: response.data.mon_from,
                monTo: response.data.mon_to,
                tuesday: (response.data.tue_from && response.data.tue_to),
                tueFrom: response.data.tue_from,
                tueTo: response.data.tue_to,
                wednesday: (response.data.wed_from && response.data.wed_to),
                wedFrom: response.data.wed_from,
                wedTo: response.data.wed_to,
                thursday: (response.data.thur_from && response.data.thur_to),
                thurFrom: response.data.thur_from,
                thurTo: response.data.thur_to,
                friday: (response.data.fri_from && response.data.fri_to),
                friFrom: response.data.fri_from,
                friTo: response.data.fri_to
            };
            yield put({ type: actionTypes.UPDATEINGSTORE_GET_SUCCESS, toEditStore: toEditStore })
        }
    } catch (error) {

    }
}

function* onUpdateStorePost(action) {
    yield put({ type: actionTypes.UPDATINGSTORE_POST });
    try {
        const response = yield updateStore_post(action.formData);
        if (response.status == 200) {
            yield put({ type: actionTypes.UPDATINGSTORE_POST_SUCCESS });
        }
    } catch (error) {
        yield put({ type: actionTypes.UPDATINGSTORE_POST_FAILURE });
    }
}

function* watchGetStores() {
    yield takeEvery(actionTypes.GETSTORES, onGetStores);
}

function* watchUploadStore() {
    yield takeEvery(actionTypes.UPLOADSTORE, onUploadStore);
}
function* watchDeleteStore() {
    yield takeEvery(actionTypes.DELETESTORE, onDeleteStore);
}
function* watchUpdateStoreGet() {
    yield takeEvery(actionTypes.UPDATESTORE_GET, onUpdateStoreGet);
}
function* watchUpdateStorePost() {
    yield takeEvery(actionTypes.UPDATESTORE_POST, onUpdateStorePost);
}

export default function* storesSagas() {
    yield all([
        watchUploadStore(),
        watchGetStores(),
        watchDeleteStore(),
        watchUpdateStoreGet(),
        watchUpdateStorePost()
    ]);
}