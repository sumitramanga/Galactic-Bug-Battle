import React from 'react';
import './Cell.css'

const Cell = ({ onClick, status }) => {
    const cellClass = `cell ${status}`;

    return (
        <button className={cellClass} onClick={onClick}></button>
    );
}

export default Cell;

