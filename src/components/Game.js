/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../content/Game.css';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(400).fill(null),
      xIsNext: true,
      winner: null,
      history: [],
      indexHistorySelect: -1,
      sortDecreaseHistory: false,
      winPositions: []
    };
  }

  handleClick(i, j) {
    const { squares, winner, sortDecreaseHistory, xIsNext } = this.state;
    const { size } = this.props;
    let { history, indexHistorySelect } = this.state;

    if (squares[i * size + j] || winner) return;
    if (indexHistorySelect !== -1) {
      if (sortDecreaseHistory) {
        history = history.slice(indexHistorySelect);
      } else {
        history = history.slice(0, indexHistorySelect + 1);
      }
      indexHistorySelect = -1;
    }

    squares[i * size + j] = xIsNext ? 'X' : 'O';
    if (sortDecreaseHistory) {
      history.unshift({
        idx: history.length,
        i,
        j,
        value: squares[i * size + j]
      });
    } else {
      history.push({
        idx: history.length,
        i,
        j,
        value: squares[i * size + j]
      });
    }

    this.setState({
      squares,
      xIsNext: !xIsNext,
      history,
      indexHistorySelect
    });

    // check winner
    if (this.checkWinner(squares, i, j, xIsNext ? 'X' : 'O')) {
      this.setState({
        winner: xIsNext ? 'X' : 'O'
      });
    }
  }

  handleHistoryClick(index) {
    const { size } = this.props;
    const squares = Array(size).fill(null);
    const { history, sortDecreaseHistory, xIsNext } = this.state;
    const sizeHistory = history.length;
    if (index >= sizeHistory) return;

    let data = null;
    if (sortDecreaseHistory) {
      for (let i = sizeHistory - 1; i >= index; i -= 1) {
        data = history[i];
        squares[data.i * size + data.j] = data.value;
      }
    } else {
      for (let i = 0; i <= index; i += 1) {
        data = history[i];
        squares[data.i * size + data.j] = data.value;
      }
    }

    // check winner
    if (data != null) {
      if (this.checkWinner(squares, data.i, data.j, data.value)) {
        this.setState({
          winner: xIsNext ? 'X' : 'O'
        });
      } else {
        this.setState({
          winner: null,
          winPositions: []
        });
      }
    }

    this.setState({
      squares,
      indexHistorySelect: index,
      xIsNext: history[index].value !== 'X'
    });
  }

  handleSortHistoryClick() {
    const { sortDecreaseHistory } = this.state;
    let { history, indexHistorySelect } = this.state;
    indexHistorySelect = history.length - indexHistorySelect - 1;
    history = history.reverse();
    this.setState({
      sortDecreaseHistory: !sortDecreaseHistory,
      history,
      indexHistorySelect
    });
  }

  resetGame() {
    this.setState({
      squares: Array(400).fill(null),
      xIsNext: true,
      winner: null,
      history: [],
      indexHistorySelect: -1,
      sortDecreaseHistory: false,
      winPositions: []
    });
  }

  checkWinner(squares, i, j, person) {
    const { size } = this.props;
    // check hàng ngang
    let dem = 0;
    let winPositions = [];
    let isNullSquare = true;
    for (let c = 0; c < size; c += 1) {
      const value = squares[i * size + c];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i,
          j: c
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }
    //
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (let c = size - 1; c > 0; c -= 1) {
      const value = squares[i * size + c];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i,
          j: c
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }

    // check hàng dọc
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (let r = 0; r < size; r += 1) {
      const value = squares[r * size + j];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i: r,
          j
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }
    //
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (let r = size - 1; r > 0; r -= 1) {
      const value = squares[r * size + j];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i: r,
          j
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }

    // check hàng chéo chính
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    let a = i;
    let b = j;
    a -= i < j ? i : j;
    b -= i < j ? i : j;
    for (; a < size && b < size; a += 1, b += 1) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i: a,
          j: b
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }
    //
    dem = 0;
    isNullSquare = true;
    winPositions = [];
    for (; a > 0 && b > 0; a -= 1, b -= 1) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i: a,
          j: b
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }

    // check hàng chéo phụ
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    a = i;
    b = j;
    a -= i < j ? i : j;
    b += i < j ? i : j;
    for (; a < size && b > 0; a += 1, b -= 1) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i: a,
          j: b
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }
    //
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (; a > 0 && b < size - 1; a -= 1, b += 1) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem += 1;
        winPositions.push({
          i: a,
          j: b
        });
        isNullSquare = false;
      } else if (value) {
        dem = 0;
        isNullSquare = false;
        winPositions = [];
      } else {
        isNullSquare = true;
      }
    }
    if (dem >= 5) {
      this.setState({
        winPositions
      });
      return true;
    }

    return false;
  }

  render() {
    const {
      history,
      winner,
      squares,
      xIsNext,
      indexHistorySelect,
      winPositions
    } = this.state;
    const { size } = this.props;

    return (
      <div>
        <h3 className="game-title">Game caro việt nam</h3>
        <div className="game">
          <div className="game-board">
            <Board
              size={size}
              squares={squares}
              winner={winner}
              xIsNext={xIsNext}
              handleClick={(i, j) => this.handleClick(i, j)}
              resetGame={() => this.resetGame()}
              winPositions={winPositions}
            />
          </div>
          <div className="game-history">
            <div className="title">
              <h4>Lịch sử đánh</h4>
              <button
                type="button"
                className="button"
                onClick={() => this.handleSortHistoryClick()}
              >
                Sort
              </button>
            </div>
            <div className="history-content">
              <ul>
                {history.map((value, index) => (
                  <li
                    className={index === indexHistorySelect ? 'li-select' : ''}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    onClick={() => this.handleHistoryClick(index)}
                  >
                    Bước {value.idx + 1} {value.value} đánh tại hàng
                    {value.i + 1} cột {value.j + 1}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
