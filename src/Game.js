import React from 'react';
import './Game.css';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(400).fill(null),
      xIsNext: true,
      winner: null,
      history: [],
      indexHistorySelect: -1,
      sortDecreaseHistory: false,
      winPositions: [],
    }
  }

  handleClick(i, j) {
    const {squares, winner, sortDecreaseHistory} = this.state;
    const {size} = this.props;
    let {history, indexHistorySelect} = this.state;
    
    if (squares[i * size + j] || winner)
        return;
    if (indexHistorySelect !== -1) {
      if (sortDecreaseHistory) {
        history = history.slice(indexHistorySelect);
      } else {
        history = history.slice(0, indexHistorySelect + 1);
      }
      indexHistorySelect = -1;
    }

    squares[i * this.props.size + j] = this.state.xIsNext ? 'X' : 'O';
    if (sortDecreaseHistory) {
      history.unshift({
        idx: history.length,
        i: i,
        j: j,
        value: squares[i * this.props.size + j]
      });
    } else {
      history.push({
        idx: history.length,
        i: i,
        j: j,
        value: squares[i * this.props.size + j]
      });
    }

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      history: history,
      indexHistorySelect: indexHistorySelect,
    })

    // check winner
    if (this.checkWinner(squares, i, j, this.state.xIsNext ? 'X' : 'O')) {
      this.setState({
        winner: this.state.xIsNext ? 'X' : 'O',
      })
    }
  }

  handleHistoryClick(index) {
    const size = this.props.size;
    const squares = Array(size).fill(null);
    const history = this.state.history;
    const sizeHistory = this.state.history.length;
    const sortDecreaseHistory = this.state.sortDecreaseHistory;
    if (index >= sizeHistory)
      return;

    let data = null;
    if (sortDecreaseHistory) {
      for (let i = sizeHistory - 1; i >= index; i--) {
        data = history[i];
        squares[data.i * size + data.j] = data.value;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        data = history[i];
        squares[data.i * size + data.j] = data.value;
      }
    }

    // check winner
    if (data != null) {
      if (this.checkWinner(squares, data.i, data.j, this.state.xIsNext ? 'X' : 'O')) {
        this.setState({
          winner: this.state.xIsNext ? 'X' : 'O',
        })
      } else {
        this.setState({
          winner: null,
          winPositions: [],
        })
      }
    }

    this.setState({
      squares: squares,
      indexHistorySelect: index,
      xIsNext: history[index].value === 'X' ? false : true,
    })
  }

  handleSortHistoryClick() {
    const sortDecreaseHistory = this.state.sortDecreaseHistory;
    let history = this.state.history.slice();
    let indexHistorySelect = this.state.indexHistorySelect;
    indexHistorySelect = history.length - indexHistorySelect - 1;
    history = history.reverse();
    this.setState({
      sortDecreaseHistory: !sortDecreaseHistory,
      history: history,
      indexHistorySelect: indexHistorySelect,
    });
  }

  render() {
    const history = this.state.history;
    const winner = this.state.winner;
    const squares = this.state.squares;
    const size = this.props.size;
    const xIsNext = this.state.xIsNext;
    const indexHistorySelect = this.state.indexHistorySelect;
    const winPositions = this.state.winPositions;

    return (
      <div>
        <h3 className="game-title">Game caro việt nam</h3>
        <div className="game">
          <div className="game-board">
            <Board size={size} squares={squares}
              winner={winner} xIsNext={xIsNext}
              handleClick={(i, j) => this.handleClick(i, j)}
              resetGame={() => this.resetGame()} winPositions={winPositions} />
          </div>
          <div className="game-history">
            <div className="title">
              <h4>Lịch sử đánh</h4>
              <button className="button" onClick={() => this.handleSortHistoryClick()}>Sort</button>
            </div>
            <div className="history-content">
              <ul>
                {
                  history.map((value, index) => (
                    <li className={index === indexHistorySelect ? "li-select" : ""} key={index} onClick={() => this.handleHistoryClick(index)}>
                      Bước {value.idx + 1} {value.value} đánh tại hàng {value.i + 1} cột {value.j + 1}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  resetGame() {
    this.setState({
      squares: Array(400).fill(null),
      xIsNext: true,
      winner: null,
      history: [],
      indexHistorySelect: -1,
      sortDecreaseHistory: false,
      winPositions: [],
    })
  }

  checkWinner(squares, i, j, person) {
    const size = this.props.size;
    // check hàng ngang
    let dem = 0;
    let winPositions = [];
    let isNullSquare = true;
    for (let c = 0; c < size; c++) {
      const value = squares[i * size + c];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: i,
          j: c,
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
        winPositions: winPositions,
      })
      return true;
    }
    //
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (let c = size - 1; c > 0; c--) {
      const value = squares[i * size + c];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: i,
          j: c,
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
        winPositions: winPositions,
      })
      return true;
    }

    // check hàng dọc
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (let r = 0; r < size; r++) {
      const value = squares[r * size + j];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: r,
          j: j,
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
        winPositions: winPositions,
      })
      return true;
    }
    //
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (let r = size - 1; r > 0; r--) {
      const value = squares[r * size + j];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: r,
          j: j,
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
        winPositions: winPositions,
      })
      return true;
    }

    // check hàng chéo chính
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    let a = i, b = j;
    a -= i < j ? i : j;
    b -= i < j ? i : j;
    for (; a < size && b < size; a++ , b++) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: a,
          j: b,
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
        winPositions: winPositions,
      })
      return true;
    }
    //
    dem = 0;
    isNullSquare = true;
    winPositions = [];
    for (; a > 0 && b > 0; a-- , b--) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: a,
          j: b,
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
        winPositions: winPositions,
      })
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
    for (; a < size && b > 0; a++ , b--) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: a,
          j: b,
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
        winPositions: winPositions,
      })
      return true;
    }
    //
    dem = 0;
    winPositions = [];
    isNullSquare = true;
    for (; a > 0 && b < size - 1; a-- , b++) {
      const value = squares[a * size + b];
      if (value === person) {
        if (isNullSquare) {
          dem = 0;
          winPositions = [];
        }
        dem++;
        winPositions.push({
          i: a,
          j: b,
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
        winPositions: winPositions,
      })
      return true;
    }

    return false;
  }
}

export default Game;
