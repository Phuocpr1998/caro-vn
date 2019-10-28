import React from 'react';
import Square from './Square';

function Board({ size, winPositions, squares, handleClick }) {
  const rows = [size];
  const winPositionsSize = winPositions.length;
  for (let i = 0; i < size; i += 1) {
    const tmp = [];
    for (let j = 0; j < size; j += 1) {
      let isWinPosition = false;
      for (let k = 0; k < winPositionsSize; k += 1) {
        const data = winPositions[k];
        if (data.i === i && data.j === j) {
          isWinPosition = true;
          break;
        }
      }
      tmp.push(
        <Square
          winSquare={isWinPosition}
          key={i * size + j}
          value={squares[i * size + j]}
          onClick={() => handleClick(i, j)}
        />
      );
    }
    rows[i] = tmp;
  }

  return (
    <div>
      {rows.map((row, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="board-row" key={id}>
          {row}
        </div>
      ))}
    </div>
  );
}

export default Board;
