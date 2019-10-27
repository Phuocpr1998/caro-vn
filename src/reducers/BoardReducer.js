function checkWinner(squares, i, j, person) {
  const size = Math.sqrt(squares.length);
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
    winPositions: [],
    messages: [],
    messageChat: ''
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
      const size = Math.sqrt(squares.length);
      const { i, j } = action;
      let { history, indexHistorySelect } = state;
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

      const value = squares[i * size + j];
      const result = checkWinner(squares, i, j, value);
      return {
        ...state,
        winner: result.isWin ? value : null,
        winPositions: result.winPositions,
        squares,
        xIsNext: !xIsNext,
        history,
        indexHistorySelect
      };
    }
    case 'SORT_HISTORY':
      return {
        ...state,
        sortDecreaseHistory: !state.sortDecreaseHistory,
        history: state.history.reverse(),
        indexHistorySelect: state.history.length - state.indexHistorySelect - 1
      };
    case 'ON_HISTORY_CLICK': {
      const { history, sortDecreaseHistory, squares } = state;
      const sizeHistory = history.length;
      const size = Math.sqrt(squares.length);

      if (action.index >= sizeHistory) return state;

      let data = null;
      squares.fill(null);
      if (sortDecreaseHistory) {
        for (let i = sizeHistory - 1; i >= action.index; i -= 1) {
          data = history[i];
          squares[data.i * size + data.j] = data.value;
        }
      } else {
        for (let i = 0; i <= action.index; i += 1) {
          data = history[i];
          squares[data.i * size + data.j] = data.value;
        }
      }
      const result = checkWinner(squares, data.i, data.j, data.value);

      return {
        ...state,
        winner: result.isWin ? data.value : null,
        winPositions: result.winPositions,
        squares,
        indexHistorySelect: action.index,
        xIsNext: history[action.index].value !== 'X'
      };
    }
    case 'MESSAGE_CHANGE':
      return {
        ...state,
        messageChat: action.message
      };
    case 'MESSAGE_SEND': {
      const { messages, messageChat } = state;
      if (messageChat === undefined || messageChat === '') {
        return state;
      }
      messages.push({ value: messageChat });
      return {
        ...state,
        messages,
        messageChat: ''
      };
    }
    default:
      return state;
  }
};

export default BoardReducer;
