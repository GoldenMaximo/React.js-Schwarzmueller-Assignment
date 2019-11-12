import React, { useState } from 'react';
import './index.css';

import UserInput from '../UserInput';
import UserOutput from '../UserOutput';

const User = props => {
    const [username, setUsername] = useState('');

    const userInputChangeHandler = event => {
        setUsername(event.target.value);
    }

    return (
        <div className="user d-flex flex-d-col align-items-center">
            <UserInput value={username ? username : props.username} onChange={userInputChangeHandler} />
            <UserOutput name={username ? username : props.username} />
        </div>
    );
};

export default User;