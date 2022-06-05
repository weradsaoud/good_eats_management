import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
    logging: false,
    emailVerificationErr: false,
    psswrdVerificationErr: false,
    apiErr: false,
    apiErrMsg: '',
    emailErrMsg: '',
    psswrdErrMsg: '',
    loggedin: false,
    user: null
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.LOGINCLICKED:
            return {
                ...state,
                logging: true,
                emailVerificationErr: false,
                psswrdVerificationErr: false,
                apiErr: false,
                apiErrMsg: '',
                emailErrMsg: '',
                psswrdErrMsg: '',
                loggedin: false
            };
        case actionsTypes.EMAIL_VERIFICATION_ERR:
            return {
                ...state,
                logging: false,
                emailVerificationErr: true,
                emailErrMsg: action.msg,
                loggedin: false
            };
        case actionsTypes.PSSWRD_VERIFICATION_ERR:
            return {
                ...state,
                logging: false,
                psswrdVerificationErr: true,
                psswrdErrMsg: action.msg,
                loggedin: false
            };
        case actionsTypes.API_ERR:
            return {
                ...state,
                logging: false,
                apiErr: true,
                apiErrMsg: action.msg,
                loggedin: false
            };
        case actionsTypes.LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
                loggedin: true,
                user: action.user
            };
        default:
            break;
    }
    return state;
};

export default logInReducer;