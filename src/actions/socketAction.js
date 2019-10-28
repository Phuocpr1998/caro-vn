import socketIOClient from 'socket.io-client';
import { SocketServer } from '../config/index';

export const disconnectToSocketServer = () => ({
  type: 'SOCKET_DISCONNECT'
});

export const findRoom = user => ({
  type: 'SOCKET_FIND_ROOM',
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

export function connectToSocketServer() {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    const socketClient = socketIOClient(SocketServer);
    socketClient.on('disconnect', () => dispatch(disconnectToSocketServer()));
    socketClient.on('partner_disconnected', () =>
      dispatch(receiverMessageChat('Đối thủ đã thoát'))
    );
    socketClient.on('join_room', data => dispatch(findRoomSuccess(data)));
    socketClient.on('message_chat', data =>
      dispatch(receiverMessageChat(data))
    );
    socketClient.on('message_typing', data =>
      console.log('message_typing', data)
    );
    dispatch(updateSocketClient(socketClient));
  };
}
