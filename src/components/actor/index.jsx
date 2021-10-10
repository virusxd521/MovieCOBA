import React from 'react';
import './style.css';

const Actor = ({name, as})=>(
    <div id={name} className="actor-box">
        <p><b>{name}</b></p>
        <p>{as}</p>
    </div>
);

export default Actor;