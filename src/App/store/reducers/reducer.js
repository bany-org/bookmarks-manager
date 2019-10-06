import * as actionTypes from '../actions';

const initialState = {
    answers: [],
    currentAnswer: [],
    lastAnswer: 0,
    availableColors: ['red', 'green', 'blue', 'yellow', 'pink'],
    availableColors2: ['red', 'green', 'blue', 'yellow', 'pink'],
    correctCombination: ['green', 'yellow', 'pink', 'red'],
    answerNumber: 0,
    submitActive: false,
    currentResult: 0,
    howManyCorrect: [],
    result: 0,
    showCorrectAnswer: false,
};

const reducer = (state = initialState, action) => {

    let st;
    let showCorrectAnswer;
    let answers;
    let res;
    let currentColors;
    let removeIndex;
    let available;
    let result;

    switch (action.type) {
        case actionTypes.CHECK_WIN:
            st = true;
            if (state.howManyCorrect[state.howManyCorrect.length -1] === state.correctCombination.length) {
                showCorrectAnswer = true;
                st = false;
                alert('win');
            }

            return({
                ...state,
                availableColors: state.availableColors2,
                currentAnswer: [],
                showCorrectAnswer: showCorrectAnswer,
                submitActive: st,
            });

        case actionTypes.ON_SUBMIT:
            answers = [...state.answers];
            let currentAnswer = [...state.currentAnswer];
            answers.push(currentAnswer);

            return({
                ...state,
                lastAnswer: currentAnswer,
                answers: answers,
                availableColors: state.availableColors2,
                currentAnswer: [],
            });

        case actionTypes.HOW_MANY_CORRECT:
            res = [...state.howManyCorrect];
            result = 0;

            for(let i = 0; i < state.correctCombination.length ;i++) {
                if(state.correctCombination[i] === state.lastAnswer[i]) {
                    ++result;
                }
            }
            res.push(result);

            return ({
                ...state,
                howManyCorrect: res,
                result: 0,

            });

        case actionTypes.RESTART_GAME:
            return ({
                ...state,
                ...initialState
            });

        case actionTypes.PICK_UP_COLOR:
            currentColors = [...state.currentAnswer];
            currentColors.push(action.value);
            available = [...state.availableColors];
            removeIndex = available.indexOf(action.value);
            available.splice(removeIndex, 1);
            (currentColors.length === state.correctCombination.length) ? st = true : st = false;

            return ({
                ...state,
                currentAnswer: currentColors,
                availableColors: available,
                availableColors2: ['red', 'green', 'blue', 'yellow', 'pink'],
                answerNumber: 0,
                submitActive: st,
                correctCombination: ['green', 'yellow', 'pink', 'red'],
            });

        case actionTypes.ON_REMOVE_COLOR:
            currentColors = [...state.currentAnswer];
            removeIndex = currentColors.indexOf(action.value);
            currentColors.splice(removeIndex, 1);

            available = [...state.availableColors];
            available.push(action.value);

            (currentColors.length === state.correctCombination.length) ? st = true : st = false;

            return({
                ...state,
                currentAnswer: currentColors,
                availableColors: available,
                submitActive: st,
            });

        default:
            return({
                ...state,
            });
    }
};

export default reducer;