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

const GameReducer = (
  state = {
    squares: Array(400).fill(null),
    winner: null,
    history: [],
    indexHistorySelect: -1,
    sortDecreaseHistory: false,
    winPositions: [],
    messages: [],
    messageChat: '',
    socketClient: null,
    findingRoom: false,
    userPlayer: null,
    playType: 0, // 0 is not select, 1 play with other player, 2 play with machine
    Xplayer: 0 // 1 is user, 2 playerUser
  },
  action
) => {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        squares: Array(400).fill(null),
        winner: null,
        history: [],
        indexHistorySelect: -1,
        sortDecreaseHistory: false,
        winPositions: [],
        messages: [],
        messageChat: '',
        socketClient: null,
        findingRoom: false,
        userPlayer: null,
        playType: 0, // 0 is not select, 1 play with other player, 2 play with machine
        Xplayer: 0 // 1 is user, 2 playerUser
      };
    case 'ON_BOARD_CLICK': {
      const {
        squares,
        winner,
        sortDecreaseHistory,
        Xplayer,
        socketClient
      } = state;
      let { history, indexHistorySelect } = state;

      if (
        (history.length % 2 === 1 && Xplayer === 1) ||
        (history.length % 2 === 0 && Xplayer === 2)
      ) {
        return state;
      }

      const size = Math.sqrt(squares.length);
      const { i, j } = action;
      if (squares[i * size + j] || winner) return state;
      if (indexHistorySelect !== -1) {
        if (sortDecreaseHistory) {
          history = history.slice(indexHistorySelect);
        } else {
          history = history.slice(0, indexHistorySelect + 1);
        }
        indexHistorySelect = -1;
      }

      squares[i * size + j] = Xplayer === 1 ? 'X' : 'O';
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
      // send position to socket server
      socketClient.emit('fight', { i, j });

      const value = squares[i * size + j];
      const result = checkWinner(squares, i, j, value);
      return {
        ...state,
        winner: result.isWin ? value : null,
        winPositions: result.winPositions,
        squares,
        history,
        indexHistorySelect
      };
    }
    case 'ON_RECEIVER_MOVE': {
      const { squares, winner, sortDecreaseHistory, Xplayer } = state;
      let { history, indexHistorySelect } = state;

      if (
        (history.length % 2 === 0 && Xplayer === 1) ||
        (history.length % 2 === 1 && Xplayer === 2)
      ) {
        return state;
      }

      const size = Math.sqrt(squares.length);
      const { i, j } = action;
      if (squares[i * size + j] || winner) return state;
      if (indexHistorySelect !== -1) {
        if (sortDecreaseHistory) {
          history = history.slice(indexHistorySelect);
        } else {
          history = history.slice(0, indexHistorySelect + 1);
        }
        indexHistorySelect = -1;
      }

      squares[i * size + j] = Xplayer === 2 ? 'X' : 'O';
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
    case 'MESSAGE_CHANGE': {
      const { socketClient } = state;
      socketClient.emit('message_typing');
      return {
        ...state,
        messageChat: action.message
      };
    }
    case 'MESSAGE_SEND': {
      const { messages, messageChat, socketClient } = state;
      if (messageChat === undefined || messageChat === '') {
        return state;
      }
      socketClient.emit('message_chat', messageChat);
      messages.push({ value: messageChat, people: null });
      return {
        ...state,
        messages,
        messageChat: ''
      };
    }
    case 'SOCKET_UPDATE_CLIENT': {
      return {
        ...state,
        socketClient: action.socket
      };
    }
    case 'SOCKET_RECEIVER_CHAT_MESSAGE': {
      const { userPlayer } = state;
      let { messages } = state;
      messages = messages.slice();
      messages.push({ value: action.message, people: userPlayer });
      return {
        ...state,
        messages
      };
    }
    case 'SOCKET_FIND_ROOM': {
      const { socketClient } = state;
      socketClient.emit('find_room', action.user);
      return {
        ...state,
        findingRoom: true,
        playType: 1
      };
    }
    case 'SOCKET_FIND_ROOM_FAILED': {
      const { socketClient } = state;
      socketClient.emit('find_room_failed');
      return {
        ...state,
        findingRoom: false,
        userPlayer: null,
        playType: 0,
        Xplayer: 0
      };
    }
    case 'SOCKET_FIND_ROOM_SUCCESS': {
      let { messages } = state;
      messages = messages.slice();
      messages.push({
        value: 'Đối thủ đã vào phòng',
        people: action.userPlayer.player
      });
      return {
        ...state,
        findingRoom: false,
        userPlayer: action.userPlayer.player,
        Xplayer: action.userPlayer.Xplayer,
        messages
      };
    }
    case 'SOCKET_DISCONNECT': {
      let { messages } = state;
      const { user } = state;
      messages = messages.slice();
      messages.push({
        value: 'Ngắt kết nối với máy chủ',
        people: user
      });
      return {
        ...state,
        findingRoom: false,
        userPlayer: null,
        messages,
        playType: 0,
        Xplayer: 0
      };
    }
    case 'PLAY_WITH_MACHINE': {
      return {
        ...state,
        findingRoom: false,
        userPlayer: null,
        playType: 2,
        Xplayer: 0
      };
    }
    default:
      return state;
  }
};

export default GameReducer;
