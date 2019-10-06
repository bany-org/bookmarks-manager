import * as action from './actions';

export const loginUserStart = (email, password) => {
    return {
        type: action.LOGIN_USER_START,
        email: email,
        password: password,
    }
}

export const loginUserSuccess = (token, userId) => {
    return {
        type: action.LOGIN_USER_SUCCESS,
        idToken: token,
        localId: userId,
    }
}

export const loginUserFail = () => {
    return {
        type: action.LOGIN_USER_FAIL
    }
}

export const registrationUserStart = (email, password) => {
    return {
        type: action.REGISTRATION_USER_START,
        email: email,
        password: password,
    }
}

export const registrationUserSuccess = () => {
    return {
        type: action.REGISTRATION_USER_SUCCESS
    }
}

export const registrationUserFail = () => {
    return {
        type: action.REGISTRATION_USER_FAIL
    }
}

export const logoutUser = () => {
    return {
        type: action.LOGOUT_USER
    }
}

export const storeClear = () => {
    return {
        type: action.STORE_CLEAR
    }
}

export const checkStorage = () => {
    return {
        type: action.CHECK_STORAGE,
    }
}

export const getUserDataSuccess = (payload) => {
    return {
        type: action.GET_USER_DATA_SUCCESS,
        data: payload,
    }
}
