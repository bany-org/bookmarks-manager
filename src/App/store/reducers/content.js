import * as actionTypes from '../actions/actions'

const initialState = {
    links: [],
    needToReload: false,
    isContentLoading: false,
}

const reducerRequestContentStart = (state) => {
    return {
        ...state, 
        isContentLoading: true,
    }
}

const reducerRequestContentSuccess = (state, action) => {
    const links = action.links || {}
    const linksWithId = Object.keys(links).map(elem => {
        return ({
            'link_id': elem, 
            'name': action.links[elem].name,
            'link': action.links[elem].link,
            'description': action.links[elem].description,
        })
    })

    return {
        ...state, 
        links: linksWithId,
        needToReload: false,
        isContentLoading: false,
    }
}

const reducerSaveItemStart = (state) => {
    return {
        ...state, 
        isContentLoading: true,
    }
}

const reducerSaveItemSuccess = (state) => {
    return {
        ...state, 
        needToReload: true,
    }
}

const reducerSaveItemFail = (state) => {
    return {
        ...state, 
        isContentLoading: false,
    }
}

const reducerRemoveItemStart = (state) => {
    return {
        ...state, 
        isContentLoading: true,
    }
}

const reducerRemoveItemSuccess = (state) => {
    return {
        ...state, 
        needToReload: true,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_CONTENT_START: return reducerRequestContentStart(state, action);
        case actionTypes.REQUEST_CONTENT_SUCCESS: return reducerRequestContentSuccess(state, action);
        case actionTypes.SAVE_ITEM_START: return reducerSaveItemStart(state, action);
        case actionTypes.SAVE_ITEM_SUCCESS: return reducerSaveItemSuccess(state, action);
        case actionTypes.SAVE_ITEM_FAIL: return reducerSaveItemFail(state, action);
        case actionTypes.REMOVE_ITEM_START: return reducerRemoveItemStart(state, action);
        case actionTypes.REMOVE_ITEM_SUCCESS: return reducerRemoveItemSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;