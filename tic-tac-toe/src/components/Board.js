import React from 'react';
import Square from './Square';

class Board extends React.Component {
    state = {}
    render() {
        const status = 'Next player: X';

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
        return <Square value={i} onClick={() => this.buttonCallBack(i)}/>
    }

    
    buttonCallBack(i) {
        alert('clicked '+ i)
        console.log('Clicked ', i );
    }
    
}

export default Board;