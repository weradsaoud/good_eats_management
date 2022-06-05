import { createStore, combineReducers } from 'redux';
//reducers
import logInReducer from '../reducers/logInReducer';
import viewReducer from '../reducers/viewReducer';
import configReducer from '../reducers/configReducer';
import breadcrumbReducer from '../reducers/breadcrumbReducer';
import storesCategoriesReducer from '../reducers/storesCategoriesReducer';
import createStoreReducer from '../reducers/createStoreReducer';
import storesReducer from '../reducers/storesReducer';
import itemsCategoriesReducer from '../reducers/itemsCategoriesReducer';
// saga middleware
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
//import rootsagas from index
import rootSaga from '../sagas';

const rootReducer = combineReducers({
    config: configReducer,
    login: logInReducer,
    breadcrumb: breadcrumbReducer,
    view: viewReducer,
    storesCategories: storesCategoriesReducer,
    createStore: createStoreReducer,
    stores:storesReducer,
    itemsCategories: itemsCategoriesReducer
});

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;

