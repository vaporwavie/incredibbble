import React from 'react';

import Shot from './../shot/Shot.js';

import "./styles/shots-list.css";

const ShotList = props => {
    return (
        <ul className="shots-list">
            <Shot/>
        </ul>
    );
}

export default ShotList;