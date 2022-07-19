import endPoints from "../globals/endPoints";
import network from "../services/network";

export const fetchLogin = (params: object, headers: object = null) => {

    return network.post(endPoints.login, { params, headers });

};

export const fetchUserInfo = () => {
    return network.get(endPoints.userInfo);
};

//store category apis

export const fetchStoresCategories = () => {
    return network.get(endPoints.storesCategories);
}

export const addStoreCategory = (name: string) => {
    return network.post(endPoints.addStoreCtegory, { params: { name: name }, headers: null });
};

export const deleteStoreCategory = (id: number) => {
    return network.post(endPoints.deleteStoreCategory, { params: { id: id }, headers: null });
}

export const updateStoreCategory = (name: string, id: number) => {
    return network.post(endPoints.updateStoreCtegory, { params: { name: name, id: id }, headers: null });
};

//store apis

export const createStore = (formData: FormData) => {
    return network.post(endPoints.createStore, { params: formData, headers: null });
};
export const getStores = () => {
    return network.get(endPoints.getStores);
};
export const deleteStore = (id: number) => {
    return network.post(endPoints.deleteStore, { params: { id: id }, headers: null });
};
export const updateStore_get = (id: number) => {
    return network.get(endPoints.updateStore, { params: { id: id }, headers: null, responseType: null });
};
export const updateStore_post = (formData: FormData) => {
    return network.post(endPoints.updateStore, { params: formData, headers: null });
};

// items categories apis

export const fetchItemsCategories = () => {
    return network.get(endPoints.itemsCategories);
};

export const uploadItemsCategories = (toAddItemsCategories) => {
    return network.post(endPoints.uploadItemsCategories, { params: toAddItemsCategories, headers: null });
};

//Orders apis

export const getNewOrders = (lastOrderId: number) => {
    return network.get(endPoints.getNewOrders, { params: null, headers: null, responseType: null });
};

export const getLastOrderId = () => {
    return network.get(endPoints.getLastOrderId);
};

export const getOrders = () => {
    return network.get(endPoints.getOrders)
};
