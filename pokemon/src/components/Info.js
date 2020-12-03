import React from 'react';

const Info = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h6>{props.type}</h6>
        </div>
    )
}

export default Info;