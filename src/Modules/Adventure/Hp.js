import React from 'react';

import Rooster from './Objects/Rooster';

import { connect } from "react-redux";

const Hp = (props) => {
    return (
        <h1>
            {props.hp}
        </h1>
    )
}

const mapStateToProps = (state) => {
    return {
      hp: state.adventure.hp,
    }
  };

// const mapDispatchToProps = dispatch => { 
//     return {
//         goldIncrease: (value) => dispatch(goldIncrease(value))
//     }
// };

export default connect(mapStateToProps)(Hp);

// export default Hp;