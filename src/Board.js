import React from 'react';

function Square(props) {
    return (
        <button className={props.winSquare ? "square-win" :"square"} onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i, j, isWinPosition) {
        const size = this.props.size;
        return <Square winSquare={isWinPosition} key={i * size + j} 
                       value={this.props.squares[i * size + j]} onClick={() => this.props.handleClick(i, j)} />;
    }

    render() {
        const size = this.props.size;
        const status = this.props.winner ? 'Winner ' + this.props.winner : 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        const rows = [size];
        const winPositions = this.props.winPositions;
        const winPositionsSize = this.props.winPositions.length;
        for (let i = 0; i < size; i++) {
            let tmp = [];
            for (let j = 0; j < size; j++) {
                let isWinPosition = false;
                for (let k = 0; k < winPositionsSize; k++) {
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
                    <button className="status" onClick={() => this.props.resetGame()}>Chơi lại</button>
                </div>
                {
                    rows.map((row, id) => (
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