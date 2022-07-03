import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    baseUrl: "http://api-good-eats.yummy-hunt.com"
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.LOAD_CONFIG:
            console.log('action', actionsTypes.LOAD_CONFIG, 'fired');
            return {
                ...state
            };

        default:
            break;
    }
    return state;
};

export default logInReducer;