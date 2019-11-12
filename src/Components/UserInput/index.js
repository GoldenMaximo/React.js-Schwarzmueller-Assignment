import React from 'react';
import './index.css';

const UserInput = props => {
    return (
        <>
            <input value={props.value} onChange={props.onChange} />
        </>
    );
};

export default UserInput;