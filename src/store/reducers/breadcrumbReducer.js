import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    tab: "",
    path: ""
}

const breadcrumbReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.TABLOADED:
            return {
                ...state,
                tab: action.tab,
                path: action.tab
            }
        case actionsTypes.CHANGEPATH:
            return {
                ...state,
                path: action.path
            }
        default:
            break;
    }
    return state;
};

export default breadcrumbReducer;