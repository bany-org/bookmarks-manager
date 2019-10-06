import * as actionTypes from '../actions/actions';
// import { loginSaga } from '../sagas/auth';

const initialState = {
    idToken: null,
    localId: null,
    isUserLogged: false,
    loading: false,
    error: false,
}

const loginUserStart = state => {
    return {
        ...state,
        loading: true,
    }
}

const loginUserSuccess = (state, action) => {
    return {
        ...state,
        isUserLogged: true,
        loading: false,
        idToken: action.idToken,
        localId: action.localId,
    }
}

const loginUserFail = (state, action) => {
    return {
        ...state,
        error: action.error,
    }
}

const logoutUser = state => {
    return {
        ...state,
        isUserLogged: false,
        idToken: null,
        localId: null,
        name: null,
    }
}

const getUserDataSuccess = (state, action) => {
    return {
        ...state,
        name: action.data.name
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_START: return loginUserStart(state, action);
        case actionTypes.LOGIN_USER_SUCCESS: return loginUserSuccess(state, action);
        case actionTypes.LOGIN_USER_FAIL: return loginUserFail(state, action);
        case actionTypes.LOGOUT_USER: return logoutUser(state, action);
        case actionTypes.GET_USER_DATA_SUCCESS: return getUserDataSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;