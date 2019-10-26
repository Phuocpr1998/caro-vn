/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Table } from 'react-bootstrap';
import '../../content/scrollbar.css';

function HistoryList({
  history,
  indexHistorySelect,
  handleSortHistoryClick,
  handleHistoryClick
}) {
  return (
    <div className="game-history">
      <Table responsive>
        <thead>
          <tr>
            <th>
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
            </th>
          </tr>
        </thead>
      </Table>
      <div className="history-content scrollbar scrollbar-primary">
        <Table responsive bordered>
          <tbody>
            {history.map((value, index) => (
              <tr
                className={
                  index === indexHistorySelect ? 'history-select' : 'history'
                }
                key={index}
                onClick={() => handleHistoryClick(index)}
              >
                <td>
                  Bước {value.idx + 1} {value.value} đánh tại hàng {value.i + 1}{' '}
                  cột {value.j + 1}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HistoryList;
