import React from 'react';

const newCardForm = (props) => {
    return(
        <div>
            <input onChange={props.newValue} value={props.name}/>
            <button onClick={props.commit}>Add new card</button>
        </div>
    )
};

export default newCardForm;