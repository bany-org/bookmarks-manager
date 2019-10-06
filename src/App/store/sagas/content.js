import { put, select } from 'redux-saga/effects';
import axios from 'axios';
import {
    requestContentSuccess,
    requestContentFail,
    saveItemSuccess,
    saveItemFail,
    removeItemSuccess,
    removeItemFail,
} from '../actions'

const apiUrl = 'https://banypcpl.firebaseio.com/'

const tokens = (state) => {
    return {
        idToken: state.auth.idToken,
        localId: state.auth.localId,
    }
}

export function* requestContentSaga() {
    const apiTokens = yield select(tokens)
    const url = `${apiUrl}${apiTokens.localId}/links.json?auth=${apiTokens.idToken}`;
    try {
        const response = yield axios.get(url);
        yield put(requestContentSuccess(response));
    } catch (error) {
        yield put(requestContentFail(error.response.data.error))
    }
}

export function* saveItemSaga(action) {
    const apiTokens = yield select(tokens)
    const url = `${apiUrl}${apiTokens.localId}/links.json?auth=${apiTokens.idToken}`;
    const data = {
        name: action.payload.name,
        link: action.payload.link,
        description: action.payload.desc,
    };
    try {
        const response = yield axios.post(url, data);
        yield put(saveItemSuccess(response.data))
    } catch (error) {
        yield put(saveItemFail(error.response.data.error))
    }
}

export function* removeItemSaga(action) {
    const apiTokens = yield select(tokens)
    const url = `${apiUrl}${apiTokens.localId}/links/${action.elementId}.json`;
    try {
        yield axios.delete(url);
        yield put(removeItemSuccess())
    } catch (error) {
        yield put(removeItemFail(error))
    }
}
