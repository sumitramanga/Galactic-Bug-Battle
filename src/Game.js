import React, { useState } from 'react';
import Board from './Board';
import ConfettiWrapper from './Confetti';

const Game = () => {
  const boardSize = 10;
  const ship = {
    row: 3,
    col: 3,
    length: 3,
    orientation: 'horizontal'
  };

  const initialBoard = Array.from({ length: boardSize }, () => Array(boardSize).fill('empty'));

  const [board, setBoard] = useState(initialBoard);

  const [hitCount, setHitCount] = useState(0);
  const isShipSunk = hitCount === ship.length;


  const checkHit = (row, col) => {
    const shipRow = ship.row;
    const shipCol = ship.col;
    const shipOrientation = ship.orientation;
    const shipLength = ship.length;

    if (shipOrientation === 'horizontal') {
      return row === shipRow && col >= shipCol && col < shipCol + shipLength;
    } else {
      return col === shipCol && row >= shipRow && row < shipRow + shipLength;
    }
  };

  const handleCellClick = (row, col) => {
    const hit = checkHit(row, col);
    const newBoard = board.map((boardRow, r) => {
      return boardRow.map((cell, c) => {
        if (r === row && c === col) {
          return hit ? 'hit' : 'miss';
        }
        return cell;
      });
    });
    setBoard(newBoard);

    if (hit && !isShipSunk) {
      setHitCount(hitCount + 1);
    }
  };

  return (
    <div className="game">
      <Board boardSize={boardSize} onCellClick={handleCellClick} cellStatus={board} />

        <ConfettiWrapper active={isShipSunk} />

    </div>
  );
};

export default Game;