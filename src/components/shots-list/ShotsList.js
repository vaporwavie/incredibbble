import React from 'react';

import Shot from './../shot/Shot.js';

import "./styles/shots-list.css";

const ShotList = props => {

    const results = props.data;
    let shot = results.map(shot => <Shot url={shot.images.normal}/>);

    return (
        <ul className="shots-list">
            {shot}
        </ul>
    );
}

export default ShotList;