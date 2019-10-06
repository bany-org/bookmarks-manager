import React from 'react';
import { connect } from 'react-redux';

import SingleColor from './SingleColor/SingleColor';

const colors = (props) => {

    const kolory = props.colors.map(color => {
        return <SingleColor
            key={color}
            color={color}
            click={props.pickUpColor}/>
    });

  return(
      <div className='colors'>
          {kolory}
      </div>
  )
};

const mapStateToProps = state => {
    return {
        colors: state.master.availableColors,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        pickUpColor: (a) => dispatch({type: 'PICK_UP_COLOR', value: a})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(colors);