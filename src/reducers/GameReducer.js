import machineIcon from '../content/machine_player.png';

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
    winPositions: [],
    messages: [],
    messageChat: '',
    socketClient: null,
    findingRoom: false,
    userPlayer: null,
    playType: 0, // 0 is not select, 1 play with other player, 2 play with machine
    Xplayer: 0, // 1 is user, 2 playerUser
    partnerDisconnect: false,
    disconnectToServer: false,
    notPermissionMove: false,
    isRequestGiveUp: false,
    isRequestReconcile: false,
    isReceiverRequestReconcile: false,
    isReceiverRequestGiveUp: false,
    isRequesting: false,
    indexHistorySelect: -1
  },
  action
) => {
  switch (action.type) {
    case 'RESET_GAME': {
      return {
        squares: Array(400).fill(null),
        winner: null,
        history: [],
        winPositions: [],
        messages: [],
        messageChat: '',
        socketClient: null,
        findingRoom: false,
        userPlayer: null,
        playType: 0, // 0 is not select, 1 play with other player, 2 play with machine
        Xplayer: 0, // 1 is user, 2 playerUser
        partnerDisconnect: false,
        disconnectToServer: false,
        notPermissionMove: false,
        isRequestGiveUp: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false,
        isReceiverRequestGiveUp: false,
        isRequesting: false,
        indexHistorySelect: -1
      };
    }
    case 'ON_BOARD_CLICK': {
      const {
        squares,
        winner,
        Xplayer,
        socketClient,
        history,
        playType
      } = state;
      let { indexHistorySelect } = state;

      if (playType !== 2) {
        if (
          (history.length % 2 === 1 && Xplayer === 1) ||
          (history.length % 2 === 0 && Xplayer === 2)
        ) {
          return {
            ...state,
            notPermissionMove: true
          };
        }
      } else if (
        indexHistorySelect !== -1 &&
        (indexHistorySelect + 1) % 2 === 1
      ) {
        return {
          ...state,
          notPermissionMove: true
        };
      }

      let historyNew;
      if (playType === 2 && indexHistorySelect !== -1) {
        indexHistorySelect = -1;
      } else {
        historyNew = history.slice();
      }

      const size = Math.sqrt(squares.length);
      const { i, j } = action;
      if (squares[i * size + j] || winner) return state;

      squares[i * size + j] = Xplayer === 1 ? 'X' : 'O';
      historyNew.push({
        idx: historyNew.length,
        i,
        j,
        value: squares[i * size + j]
      });

      if (playType !== 2) {
        // send position to socket server
        socketClient.emit('fight', { i, j });
      }

      const value = squares[i * size + j];
      const result = checkWinner(squares, i, j, value);
      return {
        ...state,
        winner: result.isWin ? value : null,
        winPositions: result.winPositions,
        squares,
        history: historyNew,
        indexHistorySelect
      };
    }
    case 'ON_RECEIVER_MOVE': {
      const {
        squares,
        winner,
        history,
        Xplayer,
        playType,
        socketClient
      } = state;
      let { indexHistorySelect } = state;
      if (playType !== 2) {
        if (
          (history.length % 2 === 0 && Xplayer === 1) ||
          (history.length % 2 === 1 && Xplayer === 2)
        ) {
          return state;
        }
      } else if (
        indexHistorySelect !== -1 &&
        (indexHistorySelect + 1) % 2 === 0
      ) {
        return {
          ...state
        };
      }

      let historyNew;
      if (playType === 2 && indexHistorySelect !== -1) {
        historyNew = history.slice(0, indexHistorySelect + 1);
        indexHistorySelect = -1;
      } else {
        historyNew = history.slice();
      }

      const size = Math.sqrt(squares.length);
      const { i, j } = action;
      if (squares[i * size + j] || winner) return state;

      squares[i * size + j] = Xplayer === 2 ? 'X' : 'O';
      historyNew.push({
        idx: historyNew.length,
        i,
        j,
        value: squares[i * size + j]
      });

      const value = squares[i * size + j];
      const result = checkWinner(squares, i, j, value);
      if (result.isWin && playType !== 2) {
        socketClient.emit('loser');
      }
      return {
        ...state,
        winner: result.isWin ? value : null,
        winPositions: result.winPositions,
        squares,
        history: historyNew,
        indexHistorySelect
      };
    }
    // case 'SORT_HISTORY':
    //   return {
    //     ...state,
    //     sortDecreaseHistory: !state.sortDecreaseHistory,
    //     history: state.history.reverse(),
    //     indexHistorySelect: state.history.length - state.indexHistorySelect - 1
    //   };
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
        indexHistorySelect: action.index
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
        socketClient: action.socket,
        disconnectToServer: false,
        partnerDisconnect: false
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
      if (socketClient === null || socketClient === undefined) return state;
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
      const { user } = state;
      messages = messages.slice();
      messages.push({
        value: 'Đối thủ đã vào phòng',
        people: action.userPlayer.player
      });
      if (action.userPlayer.Xplayer === 1) {
        messages.push({
          value: 'Bạn là người đánh trước',
          people: user
        });
      } else {
        messages.push({
          value: 'Đối thủ đươc quyền đánh trước',
          people: user
        });
      }
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
      const { user, winner } = state;
      if (winner) return state;
      messages = messages.slice();
      messages.push({
        value: 'Ngắt kết nối với máy chủ',
        people: user
      });
      return {
        ...state,
        disconnectToServer: true
      };
    }
    case 'SOCKET_PARTNER_DISCONNECT': {
      const { winner, user } = state;
      if (winner) return state;
      return {
        ...state,
        partnerDisconnect: true,
        winner: user
      };
    }
    case 'REQUEST_GIVEUP': {
      const { isRequestGiveUp } = state;
      if (isRequestGiveUp) {
        return state;
      }
      return {
        ...state,
        isRequestGiveUp: true,
        isRequesting: false
      };
    }
    case 'REQUEST_GIVEUP_CANCEL': {
      return {
        ...state,
        isRequestGiveUp: false,
        isRequesting: false
      };
    }
    case 'SOCKET_RECEVIER_REQUEST_GIVEUP_TIMEOUT': {
      let { messages } = state;
      const { user } = state;
      messages = messages.slice();
      messages.push({
        value: 'Đề nghị cầu thua của đối thủ đã hết hạn.',
        people: user
      });
      return {
        ...state,
        isRequesting: false,
        isRequestGiveUp: false,
        isReceiverRequestGiveUp: false,
        messages
      };
    }
    case 'SOCKET_REQUEST_GIVEUP': {
      const { socketClient } = state;
      socketClient.emit('give_up');
      return {
        ...state,
        isRequesting: true,
        isRequestGiveUp: true,
        isReceiverRequestGiveUp: false
      };
    }
    case 'SOCKET_RECEVIER_REQUEST_GIVEUP': {
      return {
        ...state,
        isReceiverRequestGiveUp: true
      };
    }
    case 'SOCKET_SEND_RESPONSE_GIVEUP_ACCEPT': {
      const { socketClient, Xplayer } = state;
      socketClient.emit('give_up_accept');
      return {
        ...state,
        isRequesting: false,
        isRequestGiveUp: false,
        isReceiverRequestGiveUp: false,
        winner: Xplayer === 1 ? 'X' : 'O'
      };
    }
    case 'SOCKET_SEND_RESPONSE_GIVEUP_CANCEL': {
      const { socketClient } = state;
      socketClient.emit('give_up_cancel');
      return {
        ...state,
        isRequesting: false,
        isRequestGiveUp: false,
        isReceiverRequestGiveUp: false
      };
    }
    case 'SOCKET_RECEVIER_RESPONSE_GIVEUP_ACCEPT': {
      let { messages } = state;
      const { userPlayer, Xplayer, socketClient, isRequestGiveUp } = state;
      if (!isRequestGiveUp) {
        return state;
      }
      messages = messages.slice();
      messages.push({
        value: 'Đề nghị đầu hàng được chấp nhận',
        people: userPlayer
      });
      socketClient.emit('loser');
      return {
        ...state,
        messages,
        isRequesting: false,
        isRequestGiveUp: false,
        isReceiverRequestGiveUp: false,
        winner: Xplayer === 1 ? 'O' : 'X'
      };
    }
    case 'SOCKET_RECEVIER_RESPONSE_GIVEUP_CANCEL': {
      let { messages } = state;
      const { userPlayer } = state;

      messages = messages.slice();
      messages.push({
        value: 'Đề nghị đầu hàng bị từ chối',
        people: userPlayer
      });
      return {
        ...state,
        messages,
        isRequesting: false,
        isRequestGiveUp: false,
        isReceiverRequestGiveUp: false
      };
    }
    case 'SOCKET_REQUEST_GIVEUP_TIMEOUT': {
      let { messages } = state;
      const { userPlayer, socketClient } = state;
      socketClient.emit('give_up_timeout');

      messages = messages.slice();
      messages.push({
        value: 'Không phản hồi',
        people: userPlayer
      });
      return {
        ...state,
        isRequesting: false,
        isRequestGiveUp: false,
        isReceiverRequestGiveUp: false,
        messages
      };
    }
    case 'REQUEST_RECONCILE': {
      const { isRequestReconcile } = state;
      if (isRequestReconcile) {
        return state;
      }
      return {
        ...state,
        isRequestReconcile: true,
        isRequesting: false
      };
    }
    case 'REQUEST_RECONCILE_CANCEL': {
      return {
        ...state,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false
      };
    }
    case 'SOCKET_RECEVIER_REQUEST_RECONCILE_TIMEOUT': {
      let { messages } = state;
      const { user } = state;
      messages = messages.slice();
      messages.push({
        value: 'Đề nghị hòa của đối thủ đã quá hạn',
        people: user
      });
      return {
        ...state,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false,
        messages
      };
    }
    case 'SOCKET_REQUEST_RECONCILE': {
      const { socketClient } = state;
      socketClient.emit('reconcile');
      return {
        ...state,
        isRequesting: true,
        isRequestReconcile: true,
        isReceiverRequestReconcile: false
      };
    }
    case 'SOCKET_RECEVIER_REQUEST_RECONCILE': {
      return {
        ...state,
        isReceiverRequestReconcile: true
      };
    }
    case 'SOCKET_SEND_RESPONSE_RECONCILE_ACCEPT': {
      const { socketClient, Xplayer } = state;
      socketClient.emit('reconcile_accept');
      return {
        ...state,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false,
        winner: Xplayer === 1 ? 'X' : 'O'
      };
    }
    case 'SOCKET_SEND_RESPONSE_RECONCILE_CANCEL': {
      const { socketClient } = state;
      socketClient.emit('reconcile_cancel');
      return {
        ...state,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false
      };
    }
    case 'SOCKET_RECEVIER_RESPONSE_RECONCILE_ACCEPT': {
      let { messages } = state;
      const { userPlayer, Xplayer, isRequestReconcile } = state;
      if (!isRequestReconcile) {
        return state;
      }
      messages = messages.slice();
      messages.push({
        value: 'Đề nghị hòa được chấp nhận',
        people: userPlayer
      });
      return {
        ...state,
        messages,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false,
        winner: Xplayer === 1 ? 'X' : 'O'
      };
    }
    case 'SOCKET_RECEVIER_RESPONSE_RECONCILE_CANCEL': {
      let { messages } = state;
      const { userPlayer } = state;

      messages = messages.slice();
      messages.push({
        value: 'Đề nghị hòa bị từ chối',
        people: userPlayer
      });
      return {
        ...state,
        messages,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false
      };
    }
    case 'SOCKET_REQUEST_RECONCILE_TIMEOUT': {
      let { messages } = state;
      const { userPlayer, socketClient } = state;
      socketClient.emit('reconcile_timeout');

      messages = messages.slice();
      messages.push({
        value: 'Không phản hồi',
        people: userPlayer
      });
      return {
        ...state,
        isRequesting: false,
        isRequestReconcile: false,
        isReceiverRequestReconcile: false,
        messages
      };
    }
    case 'PLAY_WITH_MACHINE': {
      return {
        ...state,
        findingRoom: false,
        playType: 2,
        userPlayer: {
          name: 'Machine',
          photo: machineIcon
        },
        Xplayer: 1 // bạn đánh trước
      };
    }
    case 'MOVE_PERMISION_CHANGE': {
      return {
        ...state,
        notPermissionMove: false
      };
    }
    default:
      return state;
  }
};

export default GameReducer;
