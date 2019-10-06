import {
    GOLD_INCREASE,
} from './actions';

const initialState = {
    hp: 50,
    gold: 0,
}

const goldIncrease = (state, action) => {
    return {
        ...state,
        hp: action.value,
    }
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GOLD_INCREASE: return goldIncrease(state, action);
        default:
            return state;
    }
}

export default reducers;