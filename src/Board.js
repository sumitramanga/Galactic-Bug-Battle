import React from 'react';
import Cell from './Cell';
import './Cell.css';

const Board = ({ boardSize, onCellClick, cellStatus }) => {
  const renderRow = (rowIndex, cellStatus) => {
    return (
      <div key={rowIndex} className="board-row">
        {Array.from({ length: boardSize }, (_, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} onClick={() => onCellClick(rowIndex, colIndex)} status={cellStatus[rowIndex][colIndex]}/>
        ))}
      </div>
    );
  };

  return (
    <div className="board">
      {Array.from({ length: boardSize }, (_, rowIndex) => renderRow(rowIndex, cellStatus))}
    </div>
  );
}

export default Board;
