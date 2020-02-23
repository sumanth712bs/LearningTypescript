import React from 'react';
import './App.css';
import Board from './components/Board'
import Square from "./components/Square";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{squares: Array(9).fill(null)}],
            isXNext: true,
            stepNumber: 0
        };
        this.provideSquare = this.provideSquare.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to Game smart';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });
        let status;

        if (winner) {
            status = 'Winner is ' + winner;
        } else {
            status = 'Next player is ' + (this.state.isXNext ? 'X' : 'O');
        }
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board squares={current.squares} onClick={(elementPosition) => this.handleClick(elementPosition)}/>
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>

        );
    }


    provideSquare(elementPosition) {
        return <Square passingValue={this.state.squares[elementPosition]}
                       onClick={() => this.handleClick(elementPosition)}/>
    }

    handleClick(elementPosition) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const newSquares = current.squares.slice();
        if (calculateWinner(newSquares) || newSquares[elementPosition]) {
            return;
        }
        newSquares[elementPosition] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{squares: newSquares}]),
            isXNext: !this.state.isXNext,
            stepNumber: history.length,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isXNext: (step % 2) === 0,
        })
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

    for (let row = 0; row < lines.length; row++) {
        const [columnOne, columnTwo, columnThree] = lines[row];
        if (squares[columnOne] && squares[columnOne] === squares[columnTwo] && squares[columnOne] === squares[columnThree]) {
            return squares[columnOne];
        }
    }
    return null;
}

export default App;
