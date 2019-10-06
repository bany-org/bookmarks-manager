import React from 'react';
import { connect } from 'react-redux';

import SingleColor from '../Colors/SingleColor/SingleColor';
import './CorrectCombination.css';

const correctCombination = (props) => {


    let hid;
    (props.showCorrectAnswer) ? hid = 'vis' : hid = 'hidden';

    const writeColorName = () => {

    };

    return (
        <div>
            <div className = {hid}>
                {
                    props.colors.map(color => {
                        return <SingleColor
                            key={color}
                            color={color}
                            class={'correctCombination'}
                            click={writeColorName}
                        />
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        colors: state.master.correctCombination,
        showCorrectAnswer: state.master.showCorrectAnswer
    }
};

export default connect(mapStateToProps)(correctCombination);