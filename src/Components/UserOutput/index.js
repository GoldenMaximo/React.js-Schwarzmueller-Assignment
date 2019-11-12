import React from 'react';
import './index.css';

const UserOutput = props => {
    return (
        <>
            <p>{props.name}</p>
            <p>What it do!</p>
        </>
    );
};

export default UserOutput;