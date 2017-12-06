import React from 'react';

import "./styles/shot.css"

const Shot = props => {

    return (
        <li className="shot">
        <img src={props.url} alt="Shot"/>
        <a href="#">
            <div className="details"/>
        </a>
    </li>
    )
};

export default Shot;