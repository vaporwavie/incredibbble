import React from 'react';

import "./styles/shot.css"

const Shot = props => (
    <li className="shot">
        <img src={props.url}/>
        <a href="#"><div className="details">
            <p>Details for this shot</p>
            <p>More details right here</p>
            <p>More details right here</p>
            <p>More details right here</p>
            <p>More details right here</p>
            <p>More details right here</p>
        </div>
        </a>
    </li>
);

export default Shot;