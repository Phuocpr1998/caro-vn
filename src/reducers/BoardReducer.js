function checkWinner(squares, i, j, person) {
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
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
    return { isWin: true, winPositions };
  }

  return { isWin: false, winPositions: [] };
}

const BoardReducer = (
  state = {
    squares: Array(400).fill(null),
    xIsNext: true,
    winner: null,
    history: [],
    indexHistorySelect: -1,
    sortDecreaseHistory: false,
    winPositions: []
  },
  action
) => {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        squares: Array(400).fill(null),
        xIsNext: true,
        winner: null,
        history: [],
        indexHistorySelect: -1,
        sortDecreaseHistory: false,
        winPositions: []
      };
    case 'ON_BOARD_CLICK': {
      const { squares, winner, sortDecreaseHistory, xIsNext } = state;
      const { size } = this.props;
      const { i, j } = action;
      let { history, indexHistorySelect } = this.state;

      if (squares[i * size + j] || winner) return state;
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

      return {
        ...state,
        squares,
        xIsNext: !xIsNext,
        history,
        indexHistorySelect
      };
    }
    case 'CHECK_WIN': {
      const { squares } = state;
      const value = squares[action.i * squares.length + action.j];
      const result = checkWinner(squares, action.i, action.j, value);
      return {
        ...state,
        isWin: result.isWin ? value : null,
        winPositions: result.winPositions
      };
    }
    default:
      return state;
  }
};

export default BoardReducer;
