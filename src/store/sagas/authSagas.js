import { all, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';
import { fetchLogin, fetchUserInfo } from '../../API/api';

function verifyEmail(email) {
    if (email == '') {
        return 'Email field is required.';
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            return 'Email is invalide.'
        } else {
            return '';
        }
    }
}

function verifyPsswrd(psswrd) {
    if (psswrd == '') {
        return 'Password field is required';
    } else {
        return '';
    }
}

function* onLogin(action) {
    let email = "werad.saoud@gmail.com";
    let password = "password";
    let emailVerificationMsg = verifyEmail(email);
    let psswrdVerificationMsg = verifyPsswrd(password);
    if (emailVerificationMsg == '' && psswrdVerificationMsg == '') {
        try {
            const response = yield fetchLogin({
                email: email,
                password: password,
                password_confirmation: password
            });
            if (response.status == 200) {
                const userInfoResponse = yield fetchUserInfo();
                console.log('userInfoResponse: ', userInfoResponse);
                if (userInfoResponse.status == 200) {
                    yield put({ type: actionTypes.LOGIN_SUCCESS, user: userInfoResponse.data.user });
                }
            }
            //yield put({ type: actionTypes.LOGIN_SUCCESS });
        } catch (error) {
            console.error('Err in onLogin saga: ', error.response);
            if (error.response.status == 422) {
                yield put({ type: actionTypes.API_ERR, msg: 'Email or password is incorrect.' });
            }
        }
    } else {
        if (emailVerificationMsg != '') {
            yield put({ type: actionTypes.EMAIL_VERIFICATION_ERR, msg: emailVerificationMsg });
        } else if (psswrdVerificationMsg != '') {
            yield put({ type: actionTypes.PSSWRD_VERIFICATION_ERR, msg: psswrdVerificationMsg });
        }
    }

}

function* watchLogin() {
    yield takeEvery(actionTypes.LOGINCLICKED, onLogin);
}

export default function* authSagas() {
    yield all([watchLogin()]);
}