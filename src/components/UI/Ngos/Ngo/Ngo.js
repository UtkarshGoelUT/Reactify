import React from 'react';

const Ngo = (props) => {
    return (
        <div>
            <h1>{props.info.name}</h1>
            <h3>{props.info.fund}</h3>
            <h3>{props.info.description}</h3>
        </div>
    );
}
export default Ngo;