import { ActionTypes } from '@mui/base';
import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    //for delete store
    deleteingStore: false,
    storeDeletedSuccessfully: false,
    deleteStoreFailure: false,
    // for edit store
    updatingStore_get: true,
    updatingStore_post: false,
    storeUpdat_success: false,
    storeUpdat_failure: false,
    toEditStore: {},
    // all stores
    getStoresSuccess: false,
    stores: []
}

const storesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.EDITINPUT:
            switch (action.input) {
                case 'coverPhoto':
                    return {
                        ...state,
                        toEditStore: {
                            ...state.toEditStore,
                            uploadCoverPhoto: action.val.uploadCoverPhoto,
                            coverPhoto: action.val.coverPhoto
                        }
                    };
                case 'logoPhoto':
                    return {
                        ...state,
                        toEditStore: {
                            ...state.toEditStore,
                            uploadLogoPhoto: action.val.uploadLogoPhoto,
                            logoPhoto: action.val.logoPhoto
                        }
                    };
                case 'name':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, name: action.val }
                    };
                case 'email':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, email: action.val }
                    };
                case 'phone':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, phone: action.val }
                    };
                case 'numberOfTables':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, numberOfTables: action.val }
                    };
                case 'description':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, description: action.val }
                    };
                case 'canDeliver':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, canDeliver: !state.toEditStore.canDeliver }
                    };
                case 'canPickup':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, canPickup: !state.toEditStore.canPickup }
                    };
                case 'canTableOrder':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, canTableOrder: !state.toEditStore.canTableOrder }
                    };
                case 'deliverMinSpend':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, deliveryMinSpend: action.val }
                    };
                case 'pickupMinSpend':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, pickupMinSpend: action.val }
                    };
                case 'tableOrderMinSpend':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, tableOrderMinSpend: action.val }
                    };
                case 'active':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, active: !state.toEditStore.active }
                    };
                case 'sat':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, saterday: !state.toEditStore.saterday }
                    };
                case 'satFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, satFrom: action.val }
                    };
                case 'satTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, satTo: action.val }
                    };
                case 'sun':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, sunday: !state.toEditStore.sunday }
                    };
                case 'sunFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, sunFrom: action.val }
                    };
                case 'sunTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, sunTo: action.val }
                    };
                case 'mon':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, monday: !state.toEditStore.monday }
                    };
                case 'monFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, monFrom: action.val }
                    };
                case 'monTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, monTo: action.val }
                    };
                case 'tue':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, tuesday: !state.toEditStore.tuesday }
                    };
                case 'tueFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, tueFrom: action.val }
                    };
                case 'tueTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, tueTo: action.val }
                    };
                case 'wed':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, wednesday: !state.toEditStore.wednesday }
                    };
                case 'wedFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, wedFrom: action.val }
                    };
                case 'wedTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, wedTo: action.val }
                    };
                case 'thur':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, thursday: !state.toEditStore.thursday }
                    };
                case 'thurFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, thurFrom: action.val }
                    };
                case 'thurTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, thurTo: action.val }
                    };
                case 'fri':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, friday: !state.toEditStore.friday }
                    };
                case 'friFrom':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, friFrom: action.val }
                    };
                case 'friTo':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, friTo: action.val }
                    };
                case 'storeCategory':
                    return {
                        ...state,
                        toEditStore: { ...state.toEditStore, categoryId: action.val }
                    };
                default:
                    break;
            }
        case actionsTypes.SAVE_STORES_LOCALLY:
            console.log('SAVE_STORES_LOCALLY: ', action.stores);
            return {
                ...state,
                getStoresSuccess: true,
                stores: [...action.stores]
            };
        case actionsTypes.DELETEINGSTORE:
            return {
                ...state,
                deleteingStore: true
            }
        case actionsTypes.STOREDELETEDSUCCESSFULLY:
            return {
                ...state,
                deleteingStore: false,
                storeDeletedSuccessfully: true
            }
        case actionsTypes.DELETESTOREFAILED:
            return {
                ...state,
                deleteingStore: false,
                deleteStoreFailure: true
            }
        case actionsTypes.UPDATEINGSTORE_GET:
            return {
                ...state,
                updatingStore_get: true
            }
        case actionsTypes.UPDATEINGSTORE_GET_SUCCESS:
            return {
                ...state,
                updatingStore_get: false,
                toEditStore: { ...action.toEditStore }
            }
        case actionsTypes.UPDATINGSTORE_POST:
            return {
                ...state,
                updatingStore_post: true
            }
        case actionsTypes.UPDATINGSTORE_POST_SUCCESS:
            return {
                ...state,
                updatingStore_post: false,
                storeUpdat_success: true
            }
        case actionsTypes.RESETUPDATESTORE_SUCCESS:
            return {
                ...state,
                storeUpdat_success: false
            }
        case actionsTypes.UPDATINGSTORE_POST_FAILURE:
            return {
                ...state,
                updatingStore_post: false,
                storeUpdat_failure: true
            }
        case actionsTypes.RESETUPDATESTORE_FAILURE:
            return {
                ...state,
                storeUpdat_failure: false
            }
        case actionsTypes.STORES_WILLUNMOUNT:
            return {
                ...state,
                getStoresSuccess: false
            }
        case actionsTypes.RESET_STOREDELETEDSUCCESSFULLY:
            return {
                ...state,
                storeDeletedSuccessfully: false
            }
        case actionsTypes.RESET_DELETESTOREFAILURE:
            return {
                ...state,
                deleteStoreFailure: false
            }
    }
    return state;
};

export default storesReducer;