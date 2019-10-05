const HistoryListReducer = (state = {}, action) => {
  switch (action.type) {
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
      const size = squares.length;

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
      return {
        ...state,
        squares,
        indexHistorySelect: action.index,
        xIsNext: history[action.index].value !== 'X'
      };
    }
    default:
      return state;
  }
};

export default HistoryListReducer;
