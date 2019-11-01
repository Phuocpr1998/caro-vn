/* eslint-disable import/prefer-default-export */
export const resetGame = () => ({
  type: 'RESET_GAME'
});

export const handleOnBoardClick = (i, j) => ({
  type: 'ON_BOARD_CLICK',
  i,
  j
});

export const handleOnHistoryClick = index => ({
  type: 'ON_HISTORY_CLICK',
  index
});

export const handleMesageFormSubmit = () => ({
  type: 'MESSAGE_SEND'
});

export const messageChatChange = message => ({
  type: 'MESSAGE_CHANGE',
  message
});

export const playWithMachine = () => ({
  type: 'PLAY_WITH_MACHINE'
});

export const changeMovePermission = () => ({
  type: 'MOVE_PERMISION_CHANGE'
});

export const giveUp = user => ({
  type: 'REQUEST_GIVEUP',
  user
});

export const giveUpCancel = user => ({
  type: 'REQUEST_GIVEUP_CANCEL',
  user
});
