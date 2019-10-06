import * as action from './actions';

export const requestContentStart = () => {
    return {
        type: action.REQUEST_CONTENT_START,
    }
}

export const requestContentSuccess = (payload) => {
    return {
        type: action.REQUEST_CONTENT_SUCCESS,
        links: payload.data
    }
}

export const requestContentFail = () => {
    return {
        type: action.REQUEST_CONTENT_FAIL
    }
}

export const saveItemStart = (data) => {
    return {
        type: action.SAVE_ITEM_START,
        payload: data,
    }
}

export const saveItemSuccess = () => {
    return {
        type: action.SAVE_ITEM_SUCCESS,
    }
}

export const saveItemFail = () => {
    return {
        type: action.SAVE_ITEM_FAIL
    }
}

export const removeItemStart = (elementId) => {
    return {
        type: action.REMOVE_ITEM_START,
        elementId: elementId,
    }
}

export const removeItemSuccess = () => {
    return {
        type: action.REMOVE_ITEM_SUCCESS,
    }
}

export const removeItemFail = () => {
    return {
        type: action.REMOVE_ITEM_FAIL,
    }
}