/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Table } from 'react-bootstrap';
import '../../content/scrollbar.css';

function HistoryList({ history, indexHistorySelect, handleHistoryClick }) {
  return (
    <div className="game-history">
      <div className="title">
        <div> Lịch sử đánh </div>
      </div>
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
