import React from 'react';

import './Link.css';

const Link = (props) => {
    
    const description = props.showDesc ? <p>{props.desc}</p> : null;

    // const styleOn = 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink';
    // const styleOff = 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray';
    const styleDisabled = 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purpl';

    // const style = props.isVisible ? styleOn : styleOff;

    return (
        <div className='tc br3 pa3 ma2 dib shadow-5'>
            <a href={props.link} rel="noopener noreferrer" target='_blank'>
                <div  className='tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5 link-field'>
                    <h3>{props.name}</h3>
                    {description}
                </div>
            </a>
            <div className='elements flex ma1'>
                 <div className='singleElement'>
                    {props.showEditButton && <button className={styleDisabled} onClick={props.onEditItem} disabled>Edit</button>}
                </div>
                <div className='singleElement'>
                    {props.showEditButton && <button onClick={props.onRemoveItem}>Remove</button>}
                </div>     
                <div className='singleElement'>
                    {props.showEditButton && <button className={styleDisabled} onClick={props.onRemoveItem} disabled>Save</button>}
                </div>        
            </div>
        </div>
    )
};

export default Link