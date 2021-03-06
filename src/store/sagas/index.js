import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import storesCategoriesSagas from './storesCategoriesSagas';
import storesSagas from './storesSagas';
import itemsCategoriesSagas from './itemsCategoriesSagas';
import ordersSagas from './ordersSagas';

export default function* rootSaga() {
    yield all([
        authSagas(),
        storesCategoriesSagas(),
        storesSagas(),
        itemsCategoriesSagas(),
        ordersSagas()
    ]);
}