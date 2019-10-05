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

export const checkWin = (i, j) => ({
  type: 'CHECK_WIN',
  i,
  j
});

export const handleOnButtonSortClick = () => ({
  type: 'SORT_HISTORY'
});
