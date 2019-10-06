import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import {
    loginUserSuccess,
    loginUserFail,
    registrationUserSuccess,
    registrationUserFail,
    getUserDataSuccess,
} from '../actions'

const apiUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
const apiKey = 'AIzaSyBaoVLN0k7dCI2DD8jmJ5gE4h8zfo1nlVs'

const tokens = (state) => {
    return {
        idToken: state.auth.idToken,
        localId: state.auth.localId,
    }
}

export function* loginUserSaga(action) {
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }
    const url = `${apiUrl}verifyPassword?key=${apiKey}`
    try {
        const response = yield axios.post(url, authData);
        yield put(loginUserSuccess(response.data.idToken, response.data.localId))
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn *1000);
        window.localStorage.setItem('token', response.data.idToken)
        window.localStorage.setItem('userId', response.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
    } catch (error) {
        yield put(loginUserFail(error.response.data.error))
    }
};

export function* registrationUserSaga(action) {
    const newUserData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }
    const url = `${apiUrl}signupNewUser?key=${apiKey}`;
    try {
        const response = yield axios.post(url, newUserData);
        yield put(registrationUserSuccess(response.data));
    } catch (error) {
        yield put(registrationUserFail(error.response.data.error))
    }
};

const apiUrl2 = 'https://banypcpl.firebaseio.com/'

export function* getUserDataSaga() {
    const apiTokens = yield select(tokens)
    const url = `${apiUrl2}${apiTokens.localId}/userData.json?auth=${apiTokens.idToken}`;
    try {
        const response = yield axios.get(url);
        yield put(getUserDataSuccess(response.data));
    } catch (error) {
        // yield put(getUserDataFail(error.response.data.error))
    }
};
