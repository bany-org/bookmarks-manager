import React from 'react';
import './TabButton.css';

const tabButton = (props) => (
    <button
        className='TabButton'
        onClick={props.clicked}
    >{props.children}</button>
);

export default tabButton;