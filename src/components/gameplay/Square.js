import React from 'react';
import '../../content/Game.css';

export default function Square(props) {
  const { winSquare, value } = props;
  let className = 'square';
  if (winSquare) {
    className = 'square-win';
  } else if (value === 'O') {
    className = 'square playerO';
  } else if (value === 'X') {
    className = 'square playerX';
  }

  return (
    <button type="button" className={className} onClick={() => props.onClick()}>
      {value}
    </button>
  );
}
