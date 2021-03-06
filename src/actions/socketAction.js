import socketIOClient from 'socket.io-client';
import { SocketServer } from '../config/index';
import { updatePointOfUser } from './actionFunction';

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

export const receiverRequestGiveUpTimeout = () => ({
  type: 'SOCKET_RECEVIER_REQUEST_GIVEUP_TIMEOUT'
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

export const requestReconcile = user => ({
  type: 'SOCKET_REQUEST_RECONCILE',
  user
});

export const receiverRequestReconcile = user => ({
  type: 'SOCKET_RECEVIER_REQUEST_RECONCILE',
  user
});

export const sendResponseReconcileAccept = user => ({
  type: 'SOCKET_SEND_RESPONSE_RECONCILE_ACCEPT',
  user
});

export const sendResponseReconcileCancel = user => ({
  type: 'SOCKET_SEND_RESPONSE_RECONCILE_CANCEL',
  user
});

export const receiverResponseReconcileAccept = user => ({
  type: 'SOCKET_RECEVIER_RESPONSE_RECONCILE_ACCEPT',
  user
});

export const receiverResponseReconcileCancel = user => ({
  type: 'SOCKET_RECEVIER_RESPONSE_RECONCILE_CANCEL',
  user
});

export const receiverRequestReconcileTimeout = () => ({
  type: 'SOCKET_RECEVIER_REQUEST_RECONCILE_TIMEOUT'
});

export const requestReconcileTimeout = user => ({
  type: 'SOCKET_REQUEST_RECONCILE_TIMEOUT',
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
    socketClient.on('give_up', () => {
      dispatch(receiverRequestGiveUp());
    });
    socketClient.on('winner', data => {
      dispatch(updatePointOfUser(data));
    });
    socketClient.on('give_up_accept', () => {
      dispatch(receiverResponseGiveUpAccept());
    });
    socketClient.on('give_up_cancel', () => {
      dispatch(receiverResponseGiveUpCancel());
    });
    socketClient.on('give_up_timeout', () => {
      dispatch(receiverRequestGiveUpTimeout());
    });
    socketClient.on('reconcile', () => {
      dispatch(receiverRequestReconcile());
    });
    socketClient.on('reconcile_accept', () => {
      dispatch(receiverResponseReconcileAccept());
    });
    socketClient.on('reconcile_cancel', () => {
      dispatch(receiverResponseReconcileAccept());
    });
    socketClient.on('reconcile_timeout', () => {
      dispatch(receiverRequestReconcileTimeout());
    });
    dispatch(updateSocketClient(socketClient));
  };
}
