import React from 'react';

const LastAnswerOpinion = (props) => {
    const opinion = props.lastAnswerCorrect ? "dobrze" : (props.lastAnswerCorrect === null) ? "zaczynamy" : "źle";

    return (
        <div>
            {props.lastAnswer}
            {opinion}
        </div>
    )

}

export default LastAnswerOpinion;