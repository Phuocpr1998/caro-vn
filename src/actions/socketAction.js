import socketIOClient from 'socket.io-client';
import { SocketServer } from '../config/index';

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

export const receiverMessageChat = (people, message) => ({
  type: 'SOCKET_RECEIVER_CHAT_MESSAGE',
  people,
  message
});

export function connectToSocketServer() {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    const socketClient = socketIOClient(SocketServer);
    socketClient.on('disconnect', data => console.log('disconnect', data));
    socketClient.on('join_room', data => console.log('join_room', data));
    socketClient.on('message_chat', data => console.log('message_chat', data));
    socketClient.on('message_typing', data =>
      console.log('message_typing', data)
    );
    dispatch(updateSocketClient(socketClient));
  };
}
