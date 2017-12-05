import React from 'react';

import "./styles/shot.css"

const Shot = props => (
    <li className="shot">
        <img src={props.url} />
    </li>
);

export default Shot;