import React from 'react';

export default function Square(props) {
  const { winSquare, value } = props;
  return (
    <button
      type="button"
      className={winSquare ? 'square-win' : 'square'}
      onClick={() => props.onClick()}
    >
      {value}
    </button>
  );
}
