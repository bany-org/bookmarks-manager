import React from 'react';

import './Button.css';

const Button = (props) => {

    const text = props.isVisible ? props.labelOut : props.labelIn;

    return (
        <div>
             <button onClick={props.onClick} disabled={props.disabled}>{text}</button> 
        </div>
    )
};

export default Button;