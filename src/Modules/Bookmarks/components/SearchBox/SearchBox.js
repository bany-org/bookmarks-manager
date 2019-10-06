import React from 'react';

import './SearchBox.css'

const SearchBox = (props) => {
    return (
        <div>
            <input
                className='input-reset ba b--black-20 pa2 mb2 db w-100'
                type='search'
                placeholder={props.placeholder}
                onChange={props.searchChange}
            />
        </div>
    );
};

export default SearchBox;