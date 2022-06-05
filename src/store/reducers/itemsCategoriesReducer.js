import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    gettingItemsCategories: true,
    itemsCategories: [],
    //add
    toAddItemsCategories: {
        'storeId_1': [{ cateName: '', active: false }]
    },//{'storeId': [{cateName: '', active: boolean}, ...], ... }
    gettingStores: true,
    stores: [],
    uploadingItemsCategories: false,
    itemsCategoriesUploadedSuccessfully: false,
    itemsCategoriesUploadeFailed: false
}

const itemsCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ITEMSCATEGORIES_CHANGEINPUT:
            switch (action.input) {
                case 'active':
                    let newToAddItemsCategories_active = {};
                    for (const storeId in state.toAddItemsCategories) {
                        if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                            let newitemsCategories = [];
                            state.toAddItemsCategories[storeId].forEach((itemCategory, index) => {
                                if (storeId == action.storeId && index == action.index) {
                                    newitemsCategories.push({ ...itemCategory, active: !itemCategory.active });
                                } else {
                                    newitemsCategories.push({ ...itemCategory });
                                }
                            });
                            newToAddItemsCategories_active[storeId] = newitemsCategories;
                        }
                    }
                    return {
                        ...state,
                        toAddItemsCategories: newToAddItemsCategories_active
                    }
                case 'name':
                    let newToAddItemsCategories_name = {};
                    for (const storeId in state.toAddItemsCategories) {
                        if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                            let newitemsCategories = [];
                            state.toAddItemsCategories[storeId].forEach((itemCategory, index) => {
                                if (storeId == action.storeId && index == action.index) {
                                    newitemsCategories.push({ ...itemCategory, cateName: action.val });
                                } else {
                                    newitemsCategories.push({ ...itemCategory });
                                }
                            });
                            newToAddItemsCategories_name[storeId] = newitemsCategories;
                        }
                    }
                    return {
                        ...state,
                        toAddItemsCategories: newToAddItemsCategories_name
                    }
                case 'storeId':
                    let newToAddItemsCategories_storeId = {};
                    for (const storeId in state.toAddItemsCategories) {
                        if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                            let newitemsCategories = [];
                            state.toAddItemsCategories[storeId].forEach((itemCategory, index) => {
                                newitemsCategories.push({ ...itemCategory });
                            });
                            if (storeId == action.storeId) {
                                newToAddItemsCategories_storeId[action.val] = newitemsCategories;
                            } else {
                                newToAddItemsCategories_storeId[storeId] = newitemsCategories;
                            }
                        }
                    }
                    console.log('newToAddItemsCategories_storeId: ', newToAddItemsCategories_storeId);
                    return {
                        ...state,
                        toAddItemsCategories: newToAddItemsCategories_storeId
                    }
                default:
                    break;
            }
        case actionsTypes.UPLOADITEMSCATEGORIES:
            return {
                ...state,
                uploadingItemsCategories: true
            }
        case actionsTypes.ITEMSCATEGORIESUPLOADEDSUCCESSFULLY:
            return {
                ...state,
                uploadingItemsCategories: false,
                itemsCategoriesUploadedSuccessfully: true
            }
        case actionsTypes.ITEMSCATEGORIESUPLOADEFAILED:
            return {
                ...state,
                uploadingItemsCategories: false,
                itemsCategoriesUploadeFailed: true
            }
        case actionsTypes.RESET_IC_S:
            return {
                ...state,
                itemsCategoriesUploadedSuccessfully: false
            }
        case actionsTypes.RESET_IC_F:
            return {
                ...state,
                itemsCategoriesUploadeFailed: false
            }
        case actionsTypes.SAVESTORES_ITEMSCATEGORIES:
            console.log('actionsTypes.SAVESTORES_ITEMSCATEGORIES', action);
            return {
                ...state,
                stores: [...action.stores],
                gettingStores: false
            }
        case actionsTypes.SAVE_ITEMSCATEGORIES_LOCALLY:
            return {
                ...state,
                itemsCategories: [...action.itemsCategories],
                gettingItemsCategories: false
            }
        case actionsTypes.ADDSTOREITEMCATEGORY:
            let newToAddItemsCategories_add = {};
            for (const storeId in state.toAddItemsCategories) {
                if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                    let newStoreItemsCategories = [];
                    state.toAddItemsCategories[storeId].forEach(itemCate => {
                        newStoreItemsCategories.push({ ...itemCate });
                    });
                    if (storeId == action.storeId) {
                        newStoreItemsCategories.push({ cateName: '', active: false });
                    }
                    newToAddItemsCategories_add[storeId] = newStoreItemsCategories;
                }
            }
            return {
                ...state,
                toAddItemsCategories: newToAddItemsCategories_add
            }
        case actionsTypes.REMOVESTOREITEMCATEGORY:
            let newToAddItemsCategories_remove = {};
            for (const storeId in state.toAddItemsCategories) {
                if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                    let newStoreItemsCategories = [];
                    state.toAddItemsCategories[storeId].forEach(itemCate => {
                        newStoreItemsCategories.push({ ...itemCate });
                    });
                    if (storeId == action.storeId) {
                        newStoreItemsCategories.splice(action.index, 1);
                    }
                    newToAddItemsCategories_remove[storeId] = newStoreItemsCategories;
                }
            }
            return {
                ...state,
                toAddItemsCategories: newToAddItemsCategories_remove
            }
        case actionsTypes.ITEMSCATEGORIES_ADDSTORE:
            let newToAddItemsCategories_addStore = {};
            for (const storeId in state.toAddItemsCategories) {
                if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                    let newStoreItemsCategories = [];
                    state.toAddItemsCategories[storeId].forEach(itemCate => {
                        newStoreItemsCategories.push({ ...itemCate });
                    });
                    newToAddItemsCategories_addStore[storeId] = newStoreItemsCategories;
                }
            }
            let keys = Object.keys(state.toAddItemsCategories);


            let keys_num = keys.map((key) => {
                if (key.includes('storeId')) {
                    return parseInt(key.split('_')[1]);
                }
            });
            let newKey;
            if (keys_num && keys_num.length > 0) {
                newKey = 'storeId_' + (Math.max(...keys_num) + 1).toString();
            } else {
                newKey = 'storeId_1';
            }

            newToAddItemsCategories_addStore[newKey] = [{ cateName: '', active: false }];
            return {
                ...state,
                toAddItemsCategories: newToAddItemsCategories_addStore
            }
        case actionsTypes.ITEMSCATEGORIES_REMOVESTORE:
            let newToAddItemsCategories_removeStore = {};
            for (const storeId in state.toAddItemsCategories) {
                if (Object.hasOwnProperty.call(state.toAddItemsCategories, storeId)) {
                    if (storeId != action.storeId) {
                        let newStoreItemsCategories = [];
                        state.toAddItemsCategories[storeId].forEach(itemCate => {
                            newStoreItemsCategories.push({ ...itemCate });
                        });
                        newToAddItemsCategories_removeStore[storeId] = newStoreItemsCategories;
                    }
                }
            }
            return {
                ...state,
                toAddItemsCategories: newToAddItemsCategories_removeStore
            }
        default:
            break;
    }
    return state;
}

export default itemsCategoriesReducer;