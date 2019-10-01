import React from 'react';

function Square(props) {
    const {winSquare, value} = props;
    return (
        <button type="button" className={winSquare ? "square-win" :"square"} onClick={() => props.onClick()}>
            {value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i, j, isWinPosition) {
        const {size, handleClick, squares} = this.props;
        return <Square winSquare={isWinPosition} key={i * size + j} 
                       value={squares[i * size + j]} onClick={() => handleClick(i, j)} />;
    }

    render() {
        const {size, winner, xIsNext, winPositions, resetGame} = this.props;
        const status = winner ? `Người chiến thắng ${  winner}` : `Người chơi tiếp theo: ${  xIsNext ? 'X' : 'O'}`;
        const rows = [size];
        const winPositionsSize = winPositions.length;
        for (let i = 0; i < size; i+=1) {
            const tmp = [];
            for (let j = 0; j < size; j+=1) {
                let isWinPosition = false;
                for (let k = 0; k < winPositionsSize; k+=1) {
                    const data = winPositions[k];
                    if (data.i === i && data.j === j) {
                        isWinPosition = true;
                        break;
                    }
                }
                tmp.push(this.renderSquare(i, j, isWinPosition));
            }
            rows[i] = tmp;
        }

        return (
            <div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <button type="button" className="status" onClick={() => resetGame()}>Chơi lại</button>
                </div>
                {
                    rows.map((row, id) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="board-row" key={id}>
                            {row}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Board;