import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    storeInfo: {
        name: "",
        email: "",
        phone: "",
        numberOfTables: "",
        description: "",
        coverPhoto: '',
        logoPhoto: '',
        uploadCoverPhoto: null,
        uploadLogoPhoto: null,
        ownerId: null,
        categoryId: null,
        active: false,
        canDeliver: true,
        deliveryMinSpend: "",
        canPickup: true,
        pickupMinSpend: "",
        canTableOrder: true,
        tableOrderMinSpend: "",
        saterday: true,
        satFrom: "",
        satTo: "",
        sunday: true,
        sunFrom: "",
        sunTo: "",
        monday: true,
        monFrom: "",
        monTo: "",
        tuesday: true,
        tueFrom: "",
        tueTo: "",
        wednesday: true,
        wedFrom: "",
        wedTo: "",
        thursday: true,
        thurFrom: "",
        thurTo: "",
        friday: true,
        friFrom: "",
        friTo: ""
    },
    itemsCategories: [{ id: '1', name: '', active: false }],
    items: [{ id: '1', name: '', price: '', vatValue: '', description: '', img: '', uploadImg: null, itemCategoryId: '', active: false }],
    options: {
        '1': [{ id: '1', name: '', values: [''] }]
    },
    variants: {}, //{'itemId':[{o1:v11, o2:v21, ..., on:vn1, price: price, extras: ['1', '2', ..., 'm']}, ...],..}
    extras: {
        '1': [{ id: '1', name: '', price: '', forAllVariants: false }]
    }
}

const createStoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.CHANGEINPUT:
            switch (action.in) {
                case 'StoreInfo':
                    let newStoreInfo;
                    switch (action.input) {
                        case 'coverPhoto':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.coverPhoto = action.val.coverPhoto;
                            newStoreInfo.uploadCoverPhoto = action.val.uploadCoverPhoto;
                            console.log('coverPhoto: ', newStoreInfo.coverPhoto);
                            console.log('uploadCoverPhoto: ', newStoreInfo.uploadCoverPhoto);
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'logoPhoto':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.logoPhoto = action.val.logoPhoto;
                            newStoreInfo.uploadLogoPhoto = action.val.uploadLogoPhoto;
                            console.log('newStoreInfo.logoPhoto: ', newStoreInfo.coverPhoto);
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'name':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.name = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'email':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.email = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'phone':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.phone = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'numberOfTables':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.numberOfTables = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'description':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.description = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'canDeliver':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.canDeliver = !newStoreInfo.canDeliver;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'canPickup':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.canPickup = !newStoreInfo.canPickup;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'canTableOrder':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.canTableOrder = !newStoreInfo.canTableOrder;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'deliverMinSpend':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.deliveryMinSpend = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'pickupMinSpend':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.pickupMinSpend = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'tableOrderMinSpend':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.tableOrderMinSpend = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'active':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.active = !newStoreInfo.active;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'sat':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.saterday = !newStoreInfo.saterday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'satFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.satFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'satTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.satTo = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'sun':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.sunday = !newStoreInfo.sunday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'sunFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.sunFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'sunTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.sunTo = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'mon':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.monday = !newStoreInfo.monday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'monFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.monFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'monTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.monTo = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'tue':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.tuesday = !newStoreInfo.tuesday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'tueFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.tueFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'tueTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.tueTo = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'wed':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.wednesday = !newStoreInfo.wednesday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'wedFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.wedFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'wedTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.wedTo = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'thur':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.thursday = !newStoreInfo.thursday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'thurFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.thurFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'thurTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.thurFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'fri':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.friday = !newStoreInfo.friday;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'friFrom':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.friFrom = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'friTo':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.friTo = action.val;
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        case 'storeCategory':
                            newStoreInfo = { ...state.storeInfo };
                            newStoreInfo.categoryId = action.val;
                            console.log('newStoreInfo.categoryId: ', newStoreInfo.categoryId);
                            return {
                                ...state,
                                storeInfo: newStoreInfo
                            }
                        default:
                            break;
                    }
                    break;
                case 'ItemsCategories':
                    switch (action.input) {
                        case 'active':
                            let newItemsCategories_active = new Array();
                            state.itemsCategories.forEach((itemCategory, index) => {
                                if (index == action.index) {
                                    newItemsCategories_active.push({ id: itemCategory.id, name: itemCategory.name, active: !itemCategory.active });
                                } else {
                                    newItemsCategories_active.push({ ...itemCategory });
                                }
                            });
                            return {
                                ...state,
                                itemsCategories: newItemsCategories_active
                            }
                        case 'name':
                            let newItemsCategories_name = new Array();
                            state.itemsCategories.forEach((itemCategory, index) => {
                                if (index == action.index) {
                                    newItemsCategories_name.push({ id: itemCategory.id, name: action.val, active: itemCategory.active });
                                } else {
                                    newItemsCategories_name.push({ ...itemCategory });
                                }
                            });
                            console.log('newItemsCategories_name: ', newItemsCategories_name);
                            return {
                                ...state,
                                itemsCategories: newItemsCategories_name
                            }
                        default:
                            break;
                    }
                    break;
                case 'Items':
                    switch (action.input) {
                        case 'itemPhoto':
                            let newItems_img = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_img.push({ id: item.id, name: item.name, price: item.price, vatValue: item.vatValue, description: item.description, img: action.val.img, uploadImg: action.val.uploadImg, itemCategoryId: item.itemCategoryId, active: item.active });
                                } else {
                                    newItems_img.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_img
                            }
                        case 'name':
                            let newItems_name = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_name.push({ id: item.id, name: action.val, price: item.price, vatValue: item.vatValue, description: item.description, img: item.img, uploadImg: item.uploadImg, itemCategoryId: item.itemCategoryId, active: item.active });
                                } else {
                                    newItems_name.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_name
                            }
                        case 'price':
                            let newItems_price = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_price.push({ id: item.id, name: item.name, price: action.val, vatValue: item.vatValue, description: item.description, img: item.img, uploadImg: item.uploadImg, itemCategoryId: item.itemCategoryId, active: item.active });
                                } else {
                                    newItems_price.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_price
                            }
                        case 'vatValue':
                            let newItems_vatValue = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_vatValue.push({ id: item.id, name: item.name, price: item.price, vatValue: action.val, description: item.description, img: item.img, uploadImg: item.uploadImg, itemCategoryId: item.itemCategoryId, active: item.active });
                                } else {
                                    newItems_vatValue.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_vatValue
                            }
                        case 'description':
                            let newItems_description = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_description.push({ id: item.id, name: item.name, price: item.price, vatValue: item.vatValue, description: action.val, img: item.img, uploadImg: item.uploadImg, itemCategoryId: item.itemCategoryId, active: item.active });
                                } else {
                                    newItems_description.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_description
                            }
                        case 'active':
                            let newItems_active = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_active.push({ id: item.id, name: item.name, price: item.price, vatValue: item.vatValue, description: item.description, img: item.img, uploadImg: item.uploadImg, itemCategoryId: item.itemCategoryId, active: !item.active });
                                } else {
                                    newItems_active.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_active
                            }
                        case 'itemCategoryId':
                            let newItems_itemCategoryId = new Array();
                            state.items.forEach((item, index) => {
                                if (index == action.index) {
                                    newItems_itemCategoryId.push({ id: item.id, name: item.name, price: item.price, vatValue: item.vatValue, description: item.description, img: item.img, uploadImg: item.uploadImg, itemCategoryId: action.val, active: item.active });
                                } else {
                                    newItems_itemCategoryId.push({ ...item });
                                }
                            });
                            return {
                                ...state,
                                items: newItems_itemCategoryId
                            }
                        default:
                            break;
                    }
                    break;
                case 'Options':
                    switch (action.input) {
                        case 'optionItemId':
                            console.log('action.itemId: ', action.itemId, 'action.newItemId: ', action.newItemId);
                            let newOptions_optionItemId = new Object();
                            for (const itemId in state.options) {
                                if (Object.hasOwnProperty.call(state.options, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemOptions = new Array();
                                        let itemOptions = state.options[itemId];
                                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                                            let newItemOption = new Object();
                                            newItemOption.id = itemOption.id;
                                            newItemOption.name = itemOption.name;
                                            newItemOption.values = [...itemOption.values];
                                            newItemOptions.push(newItemOption);
                                        });
                                        newOptions_optionItemId[action.newItemId] = newItemOptions;
                                    } else {
                                        let newItemOptions = new Array();
                                        let itemOptions = state.options[itemId];
                                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                                            let newItemOption = new Object();
                                            newItemOption.id = itemOption.id;
                                            newItemOption.name = itemOption.name;
                                            newItemOption.values = [...itemOption.values];
                                            newItemOptions.push(newItemOption);
                                        });
                                        newOptions_optionItemId[itemId] = newItemOptions;
                                    }
                                }
                            }
                            console.log('options: ', newOptions_optionItemId);
                            return {
                                ...state,
                                options: newOptions_optionItemId
                            }
                        case 'optionName':
                            console.log('action.itemId: ', action.itemId, 'action.itemOptionIndex: ', action.optionIndex, 'action.optionVal: ', action.optionVal);
                            let newOptions_optionName = new Object();
                            for (const itemId in state.options) {
                                if (Object.hasOwnProperty.call(state.options, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemOptions = new Array();
                                        let itemOptions = state.options[itemId];
                                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                                            if (itemOptionIndex == action.optionIndex) {
                                                let newItemOption = new Object();
                                                newItemOption.id = itemOption.id;
                                                newItemOption.name = action.optionVal;
                                                newItemOption.values = [...itemOption.values];
                                                newItemOptions.push(newItemOption);
                                            } else {
                                                let newItemOption = new Object();
                                                newItemOption.id = itemOption.id;
                                                newItemOption.name = itemOption.name;
                                                newItemOption.values = [...itemOption.values];
                                                newItemOptions.push(newItemOption);
                                            }
                                        });
                                        newOptions_optionName[itemId] = newItemOptions;
                                    } else {
                                        let newItemOptions = new Array();
                                        let itemOptions = state.options[itemId];
                                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                                            let newItemOption = new Object();
                                            newItemOption.id = itemOption.id;
                                            newItemOption.name = itemOption.name;
                                            newItemOption.values = [...itemOption.values];
                                            newItemOptions.push(newItemOption);
                                        });
                                        newOptions_optionName[itemId] = newItemOptions;
                                    }
                                }
                            }
                            console.log('options: ', newOptions_optionName);
                            return {
                                ...state,
                                options: newOptions_optionName
                            }
                        case 'optionValue':
                            //console.log('action.itemId: ', action.itemId, 'action.itemOptionIndex: ', action.optionIndex, 'action.optionVal: ', action.optionVal);
                            let newOptions_optionValue = new Object();
                            for (const itemId in state.options) {
                                if (Object.hasOwnProperty.call(state.options, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemOptions = new Array();
                                        let itemOptions = state.options[itemId];
                                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                                            if (itemOptionIndex == action.optionIndex) {
                                                let newItemOption = new Object();
                                                newItemOption.id = itemOption.id;
                                                newItemOption.name = itemOption.name;
                                                newItemOption.values = [...itemOption.values];
                                                newItemOption.values.splice(action.optionValueIndex, 1, action.optionValueVal);
                                                newItemOptions.push(newItemOption);
                                            } else {
                                                let newItemOption = new Object();
                                                newItemOption.id = itemOption.id;
                                                newItemOption.name = itemOption.name;
                                                newItemOption.values = [...itemOption.values];
                                                newItemOptions.push(newItemOption);
                                            }
                                        });
                                        newOptions_optionValue[itemId] = newItemOptions;
                                    } else {
                                        let newItemOptions = new Array();
                                        let itemOptions = state.options[itemId];
                                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                                            let newItemOption = new Object();
                                            newItemOption.id = itemOption.id;
                                            newItemOption.name = itemOption.name;
                                            newItemOption.values = [...itemOption.values];
                                            newItemOptions.push(newItemOption);
                                        });
                                        newOptions_optionValue[itemId] = newItemOptions;
                                    }
                                }
                            }
                            console.log('options: ', newOptions_optionValue);
                            return {
                                ...state,
                                options: newOptions_optionValue
                            }
                        default:
                            break;
                    }
                case 'Extras':
                    switch (action.input) {
                        case 'extraItemId':
                            console.log('action.itemId: ', action.itemId, 'action.newItemId: ', action.newItemId);
                            let newExtras_ItemId = new Object();
                            for (const itemId in state.extras) {
                                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            newItemExtras.push({ ...itemExtra });
                                        });
                                        newExtras_ItemId[action.newItemId] = newItemExtras;
                                    } else {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemOptionIndex) => {
                                            newItemExtras.push({ ...itemExtra });
                                        });
                                        newExtras_ItemId[itemId] = newItemExtras;
                                    }
                                }
                            }
                            console.log('extras: ', newExtras_ItemId);
                            return {
                                ...state,
                                extras: newExtras_ItemId
                            }
                        case 'extraName':
                            console.log('extraName', 'action.itemId: ', action.itemId, 'action.itemExtraIndex: ', action.itemExtraIndex, 'action.val: ', action.val);
                            let newExtras_name = new Object();
                            for (const itemId in state.extras) {
                                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            if (itemExtraIndex == action.extraIndex) {
                                                newItemExtras.push({ ...itemExtra, name: action.val });
                                            } else {
                                                newItemExtras.push({ ...itemExtra });
                                            }
                                        });
                                        newExtras_name[itemId] = newItemExtras;
                                    } else {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            newItemExtras.push({ ...itemExtra });
                                        });
                                        newExtras_name[itemId] = newItemExtras;
                                    }
                                }
                            }
                            return {
                                ...state,
                                extras: newExtras_name
                            }
                        case 'extraPrice':
                            console.log('extraName', 'action.itemId: ', action.itemId, 'action.itemExtraIndex: ', action.extraIndex, 'action.val: ', action.val);
                            let newExtras_price = new Object();
                            for (const itemId in state.extras) {
                                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            if (itemExtraIndex == action.extraIndex) {
                                                newItemExtras.push({ ...itemExtra, price: action.val });
                                            } else {
                                                newItemExtras.push({ ...itemExtra });
                                            }
                                        });
                                        newExtras_price[itemId] = newItemExtras;
                                    } else {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            newItemExtras.push({ ...itemExtra });
                                        });
                                        newExtras_price[itemId] = newItemExtras;
                                    }
                                }
                            }
                            return {
                                ...state,
                                extras: newExtras_price
                            }
                        case 'extraForAllVariants':
                            console.log('extraName', 'action.itemId: ', action.itemId, 'action.itemExtraIndex: ', action.extraIndex, 'action.val: ', action.val);
                            let newExtras_forAllVariants = new Object();
                            for (const itemId in state.extras) {
                                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            if (itemExtraIndex == action.extraIndex) {
                                                newItemExtras.push({ ...itemExtra, forAllVariants: !itemExtra.forAllVariants });
                                            } else {
                                                newItemExtras.push({ ...itemExtra });
                                            }
                                        });
                                        newExtras_forAllVariants[itemId] = newItemExtras;
                                    } else {
                                        let newItemExtras = new Array();
                                        let itemExtras = state.extras[itemId];
                                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                                            newItemExtras.push({ ...itemExtra });
                                        });
                                        newExtras_forAllVariants[itemId] = newItemExtras;
                                    }
                                }
                            }
                            return {
                                ...state,
                                extras: newExtras_forAllVariants
                            }
                        default:
                            break;
                    }
                    break;

                case 'PricingVariants':
                    switch (action.input) {
                        case 'variantPrice':
                            console.log('action: ', action);
                            let newVariants = new Object();
                            for (const itemId in state.variants) {
                                if (Object.hasOwnProperty.call(state.variants, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemVariants = [];
                                        let itemVariants = state.variants[itemId];
                                        itemVariants.forEach((itemVariant, itemVariantIndex) => {
                                            if (itemVariantIndex == action.itemVariantIndex) {
                                                let newItemVariant = new Object();
                                                let newExtrasArray = [];
                                                if (itemVariant.hasOwnProperty('extras')) {
                                                    newExtrasArray = [...itemVariant.extras];
                                                    newItemVariant = { ...itemVariant, price: action.val, extras: newExtrasArray };
                                                } else {
                                                    newItemVariant = { ...itemVariant, price: action.val };
                                                }
                                                newItemVariants.push(newItemVariant);
                                            } else {
                                                let newItemVariant = new Object();
                                                let newExtrasArray = [];
                                                if (itemVariant.hasOwnProperty('extras')) {
                                                    newExtrasArray = [...itemVariant.extras];
                                                    newItemVariant = { ...itemVariant, extras: newExtrasArray };
                                                } else {
                                                    newItemVariant = { ...itemVariant };
                                                }
                                                newItemVariants.push(newItemVariant);
                                            }
                                        });
                                        newVariants[itemId] = newItemVariants;
                                    } else {
                                        let newItemVariants = [];
                                        let itemVariants = state.variants[itemId];
                                        itemVariants.forEach((itemVariant, itemVariantIndex) => {
                                            let newItemVariant = new Object();
                                            let newExtrasArray = [];
                                            if (itemVariant.hasOwnProperty('extras')) {
                                                newExtrasArray = [...itemVariant.extras];
                                                newItemVariant = { ...itemVariant, extras: newExtrasArray };
                                            } else {
                                                newItemVariant = { ...itemVariant };
                                            }
                                            newItemVariants.push(newItemVariant);
                                        });
                                        newVariants[itemId] = newItemVariants;
                                    }
                                }
                            }
                            console.log('newVariants: ', newVariants);
                            return {
                                ...state,
                                variants: newVariants
                            }
                        case 'variantextra':
                            console.log('action: ', action);
                            let newVariants_extra = new Object();
                            for (const itemId in state.variants) {
                                if (Object.hasOwnProperty.call(state.variants, itemId)) {
                                    if (itemId == action.itemId) {
                                        let newItemVariants = [];
                                        let itemVariants = state.variants[itemId];
                                        itemVariants.forEach((itemVariant, itemVariantIndex) => {
                                            if (itemVariantIndex == action.itemVariantIndex) {
                                                let newItemVariant = new Object();
                                                let newExtrasArray = [];
                                                if (itemVariant.hasOwnProperty('extras')) {
                                                    let itemVariantExtras = [...itemVariant.extras];
                                                    if (itemVariantExtras.includes(action.extraId)) {
                                                        newExtrasArray = itemVariantExtras.filter(extraId => extraId != action.extraId);
                                                    } else {
                                                        newExtrasArray = [...itemVariantExtras];
                                                        newExtrasArray.push(action.extraId);
                                                    }
                                                    newItemVariant = { ...itemVariant, extras: newExtrasArray };
                                                } else {
                                                    newItemVariant = { ...itemVariant, extras: [action.extraId] };
                                                }
                                                newItemVariants.push(newItemVariant);
                                            } else {
                                                let newItemVariant = new Object();
                                                let newExtrasArray = [];
                                                if (itemVariant.hasOwnProperty('extras')) {
                                                    newExtrasArray = [...itemVariant.extras];
                                                    newItemVariant = { ...itemVariant, extras: newExtrasArray };
                                                } else {
                                                    newItemVariant = { ...itemVariant };
                                                }
                                                newItemVariants.push(newItemVariant);
                                            }
                                        });
                                        newVariants_extra[itemId] = newItemVariants;
                                    } else {
                                        let newItemVariants = [];
                                        let itemVariants = state.variants[itemId];
                                        itemVariants.forEach((itemVariant, itemVariantIndex) => {
                                            let newItemVariant = new Object();
                                            let newExtrasArray = [];
                                            if (itemVariant.hasOwnProperty('extras')) {
                                                newExtrasArray = [...itemVariant.extras];
                                                newItemVariant = { ...itemVariant, extras: newExtrasArray };
                                            } else {
                                                newItemVariant = { ...itemVariant };
                                            }
                                            newItemVariants.push(newItemVariant);
                                        });
                                        newVariants_extra[itemId] = newItemVariants;
                                    }
                                }
                            }
                            console.log('newVariants: ', newVariants_extra);
                            return {
                                ...state,
                                variants: newVariants_extra
                            }
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        case actionsTypes.ADDITEMCATEGORY:
            let newItemsCategories_add = new Array();
            state.itemsCategories.forEach(itemCategory => {
                newItemsCategories_add.push({ ...itemCategory });
            });
            let lastId = parseInt(newItemsCategories_add[newItemsCategories_add.length - 1].id);
            newItemsCategories_add.push({ id: (lastId + 1).toString(), name: '', active: false });
            return {
                ...state,
                itemsCategories: newItemsCategories_add
            }
        case actionsTypes.REMOVEITEMCATEGORY:
            console.log('index: ', action.index);
            let newItemsCategories_remove = new Array();
            state.itemsCategories.forEach((itemCategory, index) => {
                if (index != action.index) {
                    newItemsCategories_remove.push({ ...itemCategory });
                }
            });
            return {
                ...state,
                itemsCategories: newItemsCategories_remove
            }
        case actionsTypes.ADDITEM:
            let newItems_add = new Array();
            state.items.forEach(item => {
                newItems_add.push({ ...item });
            });
            let lastItemId = parseInt(newItems_add[newItems_add.length - 1].id);
            newItems_add.push({ id: (lastItemId + 1).toString(), price: '', vatValue: '', description: '', img: '', itemCategoryId: '', active: false });
            return {
                ...state,
                items: newItems_add
            }
        case actionsTypes.REMOVEITEM:
            let newItems_remove = new Array();
            state.items.forEach((item, index) => {
                if (index != action.index) {
                    newItems_remove.push({ ...item });
                }
            });
            return {
                ...state,
                items: newItems_remove
            }
        case actionsTypes.ADDOPTION:
            let newOptions_add = new Object();
            for (const itemId in state.options) {
                if (Object.hasOwnProperty.call(state.options, itemId)) {
                    let newItemOptions = new Array();
                    let itemOptions = state.options[itemId];
                    itemOptions.forEach((itemOption) => {
                        let newItemOption = new Object();
                        newItemOption.id = itemOption.id;
                        newItemOption.name = itemOption.name;
                        newItemOption.values = [...itemOption.values];
                        newItemOptions.push(newItemOption);
                    });
                    newOptions_add[itemId] = newItemOptions;
                }
            }
            let newItemOptionId = (Math.max(...newOptions_add[action.itemId].map(option => parseInt(option.id))) + 1).toString();
            console.log('newItemOptionId: ', newItemOptionId);
            newOptions_add[action.itemId].push({ id: newItemOptionId, name: '', values: [''] });
            return {
                ...state,
                options: newOptions_add
            }
        case actionsTypes.REMOVEOPTION:
            let newOptions_remove = new Object();
            for (const itemId in state.options) {
                if (Object.hasOwnProperty.call(state.options, itemId)) {
                    if (itemId == action.itemId) {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                            if (itemOptionIndex != action.itemOptionIndex) {
                                let newItemOption = new Object();
                                newItemOption.id = itemOption.id;
                                newItemOption.name = itemOption.name;
                                newItemOption.values = [...itemOption.values];
                                newItemOptions.push(newItemOption);
                            }
                        });
                        newOptions_remove[itemId] = newItemOptions;
                    } else {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption) => {
                            let newItemOption = new Object();
                            newItemOption.id = itemOption.id;
                            newItemOption.name = itemOption.name;
                            newItemOption.values = [...itemOption.values];
                            newItemOptions.push(newItemOption);
                        });
                        newOptions_remove[itemId] = newItemOptions;
                    }
                }
            }
            return {
                ...state,
                options: newOptions_remove
            }
        case actionsTypes.ADDOPTIONVALUE:
            //console.log('ADDOPTIONVALUE: ', 'itemId: ', action.itemId, 'itemOptionIndex: ', action.itemOptionIndex);
            let newOptions_addValue = new Object();
            for (const itemId in state.options) {
                if (Object.hasOwnProperty.call(state.options, itemId)) {
                    if (itemId == action.itemId) {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                            if (itemOptionIndex == action.itemOptionIndex) {
                                let newItemOption = new Object();
                                newItemOption.id = itemOption.id;
                                newItemOption.name = itemOption.name;
                                newItemOption.values = [...itemOption.values, ''];
                                newItemOptions.push(newItemOption);
                            } else {
                                let newItemOption = new Object();
                                newItemOption.id = itemOption.id;
                                newItemOption.name = itemOption.name;
                                newItemOption.values = [...itemOption.values];
                                newItemOptions.push(newItemOption);
                            }
                        });
                        newOptions_addValue[itemId] = newItemOptions;
                    } else {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption) => {
                            let newItemOption = new Object();
                            newItemOption.id = itemOption.id;
                            newItemOption.name = itemOption.name;
                            newItemOption.values = [...itemOption.values];
                            newItemOptions.push(newItemOption);
                        });
                        newOptions_addValue[itemId] = newItemOptions;
                    }
                }
            }
            return {
                ...state,
                options: newOptions_addValue
            }
        case actionsTypes.REMOVEOPTIONVALUE:
            console.log('action', action);
            let newOptions_removeValue = new Object();
            for (const itemId in state.options) {
                if (Object.hasOwnProperty.call(state.options, itemId)) {
                    if (itemId == action.itemId) {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption, itemOptionIndex) => {
                            if (itemOptionIndex == action.itemOptionIndex) {
                                let newItemOption = new Object();
                                newItemOption.id = itemOption.id;
                                newItemOption.name = itemOption.name;
                                newItemOption.values = [...itemOption.values];
                                newItemOption.values.splice(action.itemOptionValueIndex, 1)
                                newItemOptions.push(newItemOption);
                            } else {
                                let newItemOption = new Object();
                                newItemOption.id = itemOption.id;
                                newItemOption.name = itemOption.name;
                                newItemOption.values = [...itemOption.values];
                                newItemOptions.push(newItemOption);
                            }
                        });
                        newOptions_removeValue[itemId] = newItemOptions;
                    } else {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption) => {
                            let newItemOption = new Object();
                            newItemOption.id = itemOption.id;
                            newItemOption.name = itemOption.name;
                            newItemOption.values = [...itemOption.values];
                            newItemOptions.push(newItemOption);
                        });
                        newOptions_removeValue[itemId] = newItemOptions;
                    }
                }
            }
            return {
                ...state,
                options: newOptions_removeValue
            }
        case actionsTypes.ADDITEMFOROPTIONS:
            let newOptions_addItemForOptions = new Object();
            for (const itemId in state.options) {
                if (Object.hasOwnProperty.call(state.options, itemId)) {
                    let newItemOptions = new Array();
                    let itemOptions = state.options[itemId];
                    itemOptions.forEach((itemOption) => {
                        let newItemOption = new Object();
                        newItemOption.id = itemOption.id;
                        newItemOption.name = itemOption.name;
                        newItemOption.values = [...itemOption.values];
                        newItemOptions.push(newItemOption);
                    });
                    newOptions_addItemForOptions[itemId] = newItemOptions;
                }
            }
            let optionsItemsIds = Object.keys(state.options);
            let lastItemIdInOptions = parseInt(optionsItemsIds[optionsItemsIds.length - 1]);
            let newItemIdForOptions = (lastItemIdInOptions + 1).toString();
            newOptions_addItemForOptions[newItemIdForOptions] = [{ id: '1', name: '', values: [''] }];
            return {
                ...state,
                options: newOptions_addItemForOptions
            }
        case actionsTypes.REMOVEITEMFROMOPTIONS:
            let newOptions_removeItemFromOptions = new Object();
            for (const itemId in state.options) {
                if (Object.hasOwnProperty.call(state.options, itemId)) {
                    if (itemId != action.itemId) {
                        let newItemOptions = new Array();
                        let itemOptions = state.options[itemId];
                        itemOptions.forEach((itemOption) => {
                            let newItemOption = new Object();
                            newItemOption.id = itemOption.id;
                            newItemOption.name = itemOption.name;
                            newItemOption.values = [...itemOption.values];
                            newItemOptions.push(newItemOption);
                        });
                        newOptions_removeItemFromOptions[itemId] = newItemOptions;
                    }
                }
            }
            return {
                ...state,
                options: newOptions_removeItemFromOptions
            }
        case actionsTypes.ADDEXTRA:

            console.log('extras: ', state.extras);
            let newExtras_add = new Object();
            for (const itemId in state.extras) {
                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                    let newItemExtras = new Array();
                    let itemExtras = state.extras[itemId];
                    itemExtras.forEach((itemExtra) => {
                        newItemExtras.push({ ...itemExtra });
                    });
                    newExtras_add[itemId] = newItemExtras;
                }
            }
            let itemIdExtras = newExtras_add[action.itemId]
            console.log('itemIdExtras: ', itemIdExtras);
            let itemIdExtrasLength = itemIdExtras.length;
            console.log("itemIdExtrasLength: ", itemIdExtrasLength);
            let newItemExtraId = (parseInt(newExtras_add[action.itemId][newExtras_add[action.itemId].length - 1].id) + 1).toString();
            newExtras_add[action.itemId].push({ id: newItemExtraId, name: '', price: '', forAllVariants: false });
            return {
                ...state,
                extras: newExtras_add
            }
        case actionsTypes.REMOVEEXTRA:
            console.log('ADDEXTRA', 'action.itemId: ', action.itemId);
            let newExtras_remove = new Object();
            for (const itemId in state.extras) {
                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                    if (itemId == action.itemId) {
                        let newItemExtras = new Array();
                        let itemExtras = state.extras[itemId];
                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                            if (itemExtraIndex != action.itemExtraIndex) {
                                newItemExtras.push({ ...itemExtra });
                            }
                        });
                        newExtras_remove[itemId] = newItemExtras;
                    } else {
                        let newItemExtras = new Array();
                        let itemExtras = state.extras[itemId];
                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                            newItemExtras.push({ ...itemExtra });
                        });
                        newExtras_remove[itemId] = newItemExtras;
                    }
                }
            }
            return {
                ...state,
                extras: newExtras_remove
            }
        case actionsTypes.REMOVEITEMFROMExtras:
            console.log('ADDEXTRA', 'action.itemId: ', action.itemId);
            let newExtras_removeItem = new Object();
            for (const itemId in state.extras) {
                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                    if (itemId != action.itemId) {
                        let newItemExtras = new Array();
                        let itemExtras = state.extras[itemId];
                        itemExtras.forEach((itemExtra, itemExtraIndex) => {
                            if (itemExtraIndex != action.itemExtraIndex) {
                                newItemExtras.push({ ...itemExtra });
                            }
                        });
                        newExtras_removeItem[itemId] = newItemExtras;
                    }
                }
            }
            return {
                ...state,
                extras: newExtras_removeItem
            }
        case actionsTypes.ADDITEMFOREXTRAS:
            console.log('ADDEXTRA', 'action.itemId: ', action.itemId);
            let newExtras_addItem = new Object();
            for (const itemId in state.extras) {
                if (Object.hasOwnProperty.call(state.extras, itemId)) {
                    let newItemExtras = new Array();
                    let itemExtras = state.extras[itemId];
                    itemExtras.forEach((itemExtra, itemExtraIndex) => {
                        newItemExtras.push({ ...itemExtra });
                    });
                    newExtras_addItem[itemId] = newItemExtras;
                }
            }
            let newItemId = (Math.max(...Object.keys(newExtras_addItem).map(key => parseInt(key))) + 1).toString();
            newExtras_addItem[newItemId] = [{ id: '1', name: '', price: '', forAllVariants: false }]
            return {
                ...state,
                extras: newExtras_addItem
            }
        case actionsTypes.SAVEVARIANTSINSTORE:
            console.log('SAVEVARIANTSINSTORE: ', action.variants);
            let calculatedItemsIds = Object.keys(action.variants);
            let existedItemsIds = Object.keys(state.variants);
            if (existedItemsIds.length == 0) {
                return {
                    ...state,
                    variants: { ...action.variants }
                }
            } else {
                let newVariants = {};
                calculatedItemsIds.forEach(calculatedItemId => {
                    let newItemVariants = [];
                    if (existedItemsIds.includes(calculatedItemId)) {
                        let calculatedItemVariants = action.variants[calculatedItemId];
                        //console.log('calculatedItemVariants: ', calculatedItemVariants);
                        let existedItemVariants = state.variants[calculatedItemId];
                        //console.log('existedItemVariants: ', existedItemVariants);
                        let firstCalculatedItemVariant = calculatedItemVariants[0];
                        let firstExistedItemVariant = existedItemVariants[0];
                        let firstCalculatedItemVariantKeys = Object.keys(firstCalculatedItemVariant).filter(key => (key != 'price') && (key != 'extras'));
                        let firstExistedItemVariantKeys = Object.keys(firstExistedItemVariant).filter(key => (key != 'price') && (key != 'extras'));
                        let equal = false;
                        if (firstCalculatedItemVariantKeys.length == firstExistedItemVariantKeys.length) {
                            for (let index = 0; index < firstCalculatedItemVariantKeys.length; index++) {
                                if (!firstExistedItemVariantKeys.includes(firstCalculatedItemVariantKeys[index])) {
                                    break;
                                }
                                if (index == firstCalculatedItemVariantKeys.length - 1) {
                                    equal = true;
                                }
                            }
                        }
                        if (equal) {
                            calculatedItemVariants.forEach(calculatedItemVariant => {
                                let calculatedItemVariantOptionsValues = firstCalculatedItemVariantKeys.map(key => calculatedItemVariant[key]);
                                let matchedExistedItemVariants = existedItemVariants.filter(existedItemVariant => {
                                    let existedItemVariantOptionsValues = firstCalculatedItemVariantKeys.map(key => existedItemVariant[key]);
                                    let equal = false;
                                    for (let index = 0; index < existedItemVariantOptionsValues.length; index++) {
                                        if (!existedItemVariantOptionsValues.includes(calculatedItemVariantOptionsValues[index])) {
                                            break;
                                        }
                                        if (index == firstCalculatedItemVariantKeys.length - 1) {
                                            equal = true;
                                        }
                                    }
                                    return equal;
                                });
                                console.log('matchedExistedItemVariants: ', matchedExistedItemVariants);
                                if (matchedExistedItemVariants.length > 0) {
                                    let matchedExistedItemVariant = matchedExistedItemVariants[0];
                                    if (matchedExistedItemVariant.hasOwnProperty('price') && matchedExistedItemVariant.hasOwnProperty('extras')) {
                                        newItemVariants.push({ ...calculatedItemVariant, price: matchedExistedItemVariant.price, extras: [...matchedExistedItemVariant.extras] });
                                    } else if (matchedExistedItemVariant.hasOwnProperty('price')) {
                                        newItemVariants.push({ ...calculatedItemVariant, price: matchedExistedItemVariant.price });
                                    } else if (matchedExistedItemVariant.hasOwnProperty('extras')) {
                                        newItemVariants.push({ ...calculatedItemVariant, extras: [...matchedExistedItemVariant.extras] });
                                    } else {
                                        newItemVariants.push({ ...calculatedItemVariant });
                                    }
                                } else {
                                    newItemVariants.push({ ...calculatedItemVariant, extras: [...calculatedItemVariant.extras] });
                                }
                            });
                        } else {
                            newItemVariants = [...calculatedItemVariants];
                        }
                        newVariants[calculatedItemId] = newItemVariants;
                    } else {
                        newVariants[calculatedItemId] = [...action.variants[calculatedItemId]];
                    }
                });
                return {
                    ...state,
                    variants: { ...newVariants }
                }
            }
        default:
            break;
    }
    return state;
};

export default createStoreReducer;