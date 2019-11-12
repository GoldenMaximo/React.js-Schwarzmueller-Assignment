import React from 'react';
import './App.css';

import User from './Components/User';

function App() {
    return (
        <div className="content d-flex flex-d-col align-items-center">
            <h1>First assignment, too easy.</h1>
            <User username="Maximillian Schwarzmueller"/>
            <User username="Gustavo Maximo" />
            <User username="Thomas Jefferson" />
        </div>
    );
}

export default App;
