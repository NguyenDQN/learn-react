import React from 'react';
import './App.css'
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(i) {
        // const squares = this.state.squares.slice();
        // squares[i] = this.state.isXNext ? 'X' : 'O';
        // const isXNext = !this.state.isXNext;
        // this.setState({squares: squares, isXNext});
    }

    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onSquareClick(i)}></Square>
    }
    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        }
    }

    onSquareClick(i) {
        console.log('on square click', i);
        const current = this.state.history[this.state.history.length -1];
        const cloneCurrentSquares = current.squares.slice();
        cloneCurrentSquares[i] = 'X';
        const history = this.state.history;
        this.setState({
            history: history.concat([{
                squares: cloneCurrentSquares
            }]),
            xIsNext: !this.state.xIsNext,
        })
    }
    render() {
        const current = this.state.history[this.state.history.length -1];
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onSquareClick={(i) => this.onSquareClick(i)} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}
export default Game;
