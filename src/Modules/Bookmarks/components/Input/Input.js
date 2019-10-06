import React from 'react';

const Input = (props) => {
    return (
        <div className='singleElement'>
            <div className="measure">
                <label htmlFor={props.id} className="f6 b db mb2">{props.title} <span className="normal black-60">{props.subtitle}</span></label>
                <input id={props.id} name={props.name} className="input-reset ba b--black-20 pa2 mb2 db w-100" type={props.type} value={props.value} onChange={props.onInputChange} />
            </div>
        </div>
    )
}

export default Input