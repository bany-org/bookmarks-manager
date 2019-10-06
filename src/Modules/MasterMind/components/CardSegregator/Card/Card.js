import React from 'react';
import './Card.css'

const card  = (props) => {
    return (
        <div className='Card' >
            <h3>Name: {props.name}</h3>
            <p>Id: {props.id}</p>
            <input onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
        )
};

export default card;