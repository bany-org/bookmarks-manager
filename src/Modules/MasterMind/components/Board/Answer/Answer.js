import React from 'react';
import './Answer.css';
import SingleColor from '../Colors/SingleColor/SingleColor';

const answer = (props) => {
    return(
        <div>
            <div className='Answer'>
                <SingleColor color={props.color1} click={props.click} class={'answer'} />
                <SingleColor color={props.color2} click={props.click} class={'answer'} />
                <SingleColor color={props.color3} click={props.click} class={'answer'} />
                <SingleColor color={props.color4} click={props.click} class={'answer'} />
            </div>


            <div className='Answer1'>
                <h3><span className="badge badge-secondary">{props.result}</span></h3>

            </div>
        </div>

    )
};

export default answer;