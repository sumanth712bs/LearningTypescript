import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>

                <div className="status">{status}</div>
                <div className="board-row">
                    {this.provideSquare(0)}
                    {this.provideSquare(1)}
                    {this.provideSquare(2)}
                </div>
                <div className="board-row">
                    {this.provideSquare(3)}
                    {this.provideSquare(4)}
                    {this.provideSquare(5)}
                </div>
                <div className="board-row">
                    {this.provideSquare(6)}
                    {this.provideSquare(7)}
                    {this.provideSquare(8)}
                </div>
            </div>
        );
    }

    provideSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
        console.log('Squares = ', squares);
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default Board;