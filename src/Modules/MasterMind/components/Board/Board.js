import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.css'
import Colors from './Colors/Colors';
import MyGuess from './MyGuess/MyGuess';
import PreparedAnswer from './PreparedAnswer/PreparedAnswer';
import CorrectCombination from './CorrectCombination/CorrectCombination';
import { RESTART_GAME } from "../../../../App/store/actions";

class Board extends Component {

    emptyclick = () => {

    };

    render() {
        return(
            <div className='board'>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.restartGame}>Restart
                </button>

                <div className='hiddenContainer'>
                    <CorrectCombination />
                </div>

                <div className='myGuessContainer'>
                    <MyGuess
                        click={this.emptyclick}
                    />
                </div>

                <div className='preparedAnswer'>
                    <PreparedAnswer />
                </div>
                {!this.props.showCorrectAnswer ?
                <div className='colorsContainer'>
                    <Colors />
                </div>
                    : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showCorrectAnswer: state.master.showCorrectAnswer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        restartGame: () => dispatch({type: RESTART_GAME})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);