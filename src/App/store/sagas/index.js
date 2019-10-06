import { takeEvery, all } from 'redux-saga/effects';

import * as actions from '../actions/actions';

import {
    loginUserSaga, registrationUserSaga, getUserDataSaga,
} from './auth';

import {
    requestContentSaga, saveItemSaga, removeItemSaga
} from './content';

export function* watchAuth() {
    yield all([
        takeEvery(actions.LOGIN_USER_START, loginUserSaga),
        takeEvery(actions.LOGIN_USER_SUCCESS, getUserDataSaga),
        takeEvery(actions.REGISTRATION_USER_START, registrationUserSaga),
    ]);
}

export function* watchContent() {
    yield all([
        takeEvery(actions.REQUEST_CONTENT_START, requestContentSaga),
        takeEvery(actions.SAVE_ITEM_START, saveItemSaga),
        takeEvery(actions.REMOVE_ITEM_START, removeItemSaga),
    ]);
}


