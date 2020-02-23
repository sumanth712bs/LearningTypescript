import React from 'react';
import Square from "./Square";

class Board extends React.Component {
    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.provideSquare(0)}
                    {this.provideSquare(1)}
                    {this.provideSquare(2)}
                </div>
                <div className='board-row'>
                    {this.provideSquare(3)}
                    {this.provideSquare(4)}
                    {this.provideSquare(5)}
                </div>
                <div className='board-row'>
                    {this.provideSquare(6)}
                    {this.provideSquare(7)}
                    {this.provideSquare(8)}
                </div>
            </div>)
    }

    provideSquare(elementPosition) {
        return <Square passingValue={this.props.squares[elementPosition]} onClick={() => this.props.onClick(elementPosition)}/>
    }
}



export default Board;