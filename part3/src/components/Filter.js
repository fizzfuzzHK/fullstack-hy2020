import React from 'react';

const Filter = (props) => {
    return (
        <div>
            filter shown with:<input
            onChange={props.handleFilterOnChange}/>
        </div>
    )
}

export default Filter