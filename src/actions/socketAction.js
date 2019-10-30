import socketIOClient from 'socket.io-client';
import { SocketServer } from '../config/index';

export const disconnectToSocketServer = () => ({
  type: 'SOCKET_DISCONNECT'
});

export const partnerDisconnect = () => ({
  type: 'SOCKET_PARTNER_DISCONNECT'
});

export const findRoom = user => ({
  type: 'SOCKET_FIND_ROOM',
  user
});

export const requestGiveUp = user => ({
  type: 'SOCKET_REQUEST_GIVEUP',
  user
});

export const receiverRequestGiveUp = user => ({
  type: 'SOCKET_RECEVIER_REQUEST_GIVEUP',
  user
});

export const sendResponseGiveUpAccept = user => ({
  type: 'SOCKET_SEND_RESPONSE_GIVEUP_ACCEPT',
  user
});

export const sendResponseGiveUpCancel = user => ({
  type: 'SOCKET_SEND_RESPONSE_GIVEUP_CANCEL',
  user
});

export const receiverResponseGiveUpAccept = user => ({
  type: 'SOCKET_RECEVIER_RESPONSE_GIVEUP_ACCEPT',
  user
});

export const receiverResponseGiveUpCancel = user => ({
  type: 'SOCKET_RECEVIER_RESPONSE_GIVEUP_CANCEL',
  user
});

export const requestGiveUpTimeout = user => ({
  type: 'SOCKET_REQUEST_GIVEUP_TIMEOUT',
  user
});

export const findRoomFailed = () => ({
  type: 'SOCKET_FIND_ROOM_FAILED'
});

export const findRoomSuccess = userPlayer => ({
  type: 'SOCKET_FIND_ROOM_SUCCESS',
  userPlayer
});

export const updateSocketClient = socket => ({
  type: 'SOCKET_UPDATE_CLIENT',
  socket
});

export const receiverMessageChat = message => ({
  type: 'SOCKET_RECEIVER_CHAT_MESSAGE',
  message
});

export const receiverMovePosition = (i, j) => ({
  type: 'ON_RECEIVER_MOVE',
  i,
  j
});

export function connectToSocketServer() {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    const socketClient = socketIOClient(SocketServer);
    socketClient.on('disconnect', () => dispatch(disconnectToSocketServer()));
    socketClient.on('partner_disconnected', () => {
      dispatch(receiverMessageChat('Đối thủ đã thoát'));
      dispatch(partnerDisconnect());
    });
    socketClient.on('join_room', data => dispatch(findRoomSuccess(data)));
    socketClient.on('message_chat', data =>
      dispatch(receiverMessageChat(data))
    );
    socketClient.on('message_typing', data =>
      console.log('message_typing', data)
    );
    socketClient.on('fight', data =>
      dispatch(receiverMovePosition(data.i, data.j))
    );
    socketClient.on('give_up', () => dispatch(receiverRequestGiveUp()));
    socketClient.on('give_up_accept', () =>
      dispatch(receiverResponseGiveUpAccept())
    );
    socketClient.on('give_up_cancel', () =>
      dispatch(receiverResponseGiveUpCancel())
    );
    dispatch(updateSocketClient(socketClient));
  };
}
