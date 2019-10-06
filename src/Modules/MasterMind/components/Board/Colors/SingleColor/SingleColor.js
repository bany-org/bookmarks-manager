import React from 'react';

import './SingleColor.css';

const singleColor = (props) => {

    const a = props.color;
    const b = props.class;
    let classColor = 'oneColor ' + a + ' ' + b;

  return(
      <div className={classColor} onClick={() => props.click(a)}>
      </div>
  )
};

export default singleColor;