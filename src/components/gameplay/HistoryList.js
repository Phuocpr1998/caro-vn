/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function HistoryList({
  history,
  indexHistorySelect,
  handleSortHistoryClick,
  handleHistoryClick
}) {
  return (
    <div className="game-history">
      <div className="title">
        <h4>Lịch sử đánh</h4>
        <button
          type="button"
          className="button"
          onClick={() => handleSortHistoryClick()}
        >
          Sort
        </button>
      </div>
      <div className="history-content">
        <ul>
          {history.map((value, index) => (
            <li
              className={index === indexHistorySelect ? 'li-select' : ''}
              key={index}
              onClick={() => handleHistoryClick(index)}
            >
              Bước {value.idx + 1} {value.value} đánh tại hàng
              {value.i + 1} cột {value.j + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HistoryList;
