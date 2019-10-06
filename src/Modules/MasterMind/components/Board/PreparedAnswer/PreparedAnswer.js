import React from 'react';
import { connect } from 'react-redux';

import SingleColor from '../Colors/SingleColor/SingleColor';
import { ON_SUBMIT, ON_REMOVE_COLOR, HOW_MANY_CORRECT, CHECK_WIN } from "../../../../../App/store/actions";

const preparedAnswer = (props) => {

    const onCheck = () => {
        props.submit();
        props.howManyCorrect();
        props.checkForWin()
    };

    return (
        <div>
            <div>
                <button
                    type="button"
                    className="btn btn-success"
                    disabled={!props.isActive}
                    onClick={onCheck}>Check</button>
                <br/>
            {
                props.currentAnswer.map(color => {
                    return (
                         <SingleColor
                             key={color}
                             color={color}
                             class={'preparedAnswer'}
                             click={props.onRemoveColor} />
                    )
                })
             }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        currentAnswer: state.master.currentAnswer,
        isActive: state.master.submitActive
    }
};

const mapDispatchToProps = dispatch => {
    return({
        submit: () => dispatch({type: ON_SUBMIT}),
        onRemoveColor: (a) => dispatch({type: ON_REMOVE_COLOR, value: a}),
        howManyCorrect: () => dispatch({type: HOW_MANY_CORRECT}),
        checkForWin: () => dispatch({type: CHECK_WIN})

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(preparedAnswer);