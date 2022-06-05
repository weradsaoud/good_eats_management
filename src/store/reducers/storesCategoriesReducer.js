import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    getStoresCategoriesSuccess: true,
    getStoresCategoriesFailure: false,
    redirectToStoresCategories: false,
    failureMSG: '',
    successMSG: '',
    storesCategories: []
}

const storesCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.SAVE_STORESCATEGORIES_LOCALLY:
            console.log('SAVE_STORESCATEGORIES_LOCALLY: ', action);
            let newStoresCategories = new Array();
            newStoresCategories = action.storesCategories;
            return {
                ...state,
                storesCategories: newStoresCategories
            };
        case actionsTypes.GET_STORESCATEGORIES_SUCCESS:
            return {
                ...state,
                getStoresCategoriesSuccess: true,
                getStoresCategoriesFailure: false,
                redirectToStoresCategories: true,
                successMSG: 'Categories was fetched successfully'
            }
        case actionsTypes.GET_STORESCATEGORIES_FAILURE:
            return {
                ...state,
                getStoresCategoriesSuccess: false,
                getStoresCategoriesFailure: true,
                successMSG: 'Category was not fetched successfully'
            }
        default:
            break;
    }
    return state;
};

export default storesCategoriesReducer;