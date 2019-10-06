import React from 'react';
import { connect } from 'react-redux';
import Answer from "../Answer/Answer";

const MyGuess = (props) => {

    const arr = [...props.answers].reverse();
    const res = [...props.result].reverse();


    return (
        arr.map((ans, index) => {
            return (
                <Answer
                    key={index}
                    color1={ans[0]}
                    color2={ans[1]}
                    color3={ans[2]}
                    color4={ans[3]}
                    click={props.click}
                    result={res[index]}
                />

            )
        })
    )
};

const mapStateToProps = state => {
    return {
        answers: state.master.answers,
        result: state.master.howManyCorrect
    }
};

export default connect(mapStateToProps)(MyGuess);