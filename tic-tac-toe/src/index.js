import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className={"square " + (props.winnerSquare ? "winner" : "")} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
    	<Square 
    		value={this.props.squares[i]}
        winnerSquare={isWinnerSquare(this.props.winnerLines, i)}
    		onClick={() => this.props.onClick(i)}
    	/>
    )
  }

  render() {
    return (
      <div>
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
	constructor() {
		super();
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			stepNumber: 0,
			xIsNext: true,
		}
	}	

	handleClick(i) {
  	const history = this.state.history.slice(0, this.state.stepNumber + 1);
  	const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares: squares,
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		});
	}

  render() {
  	const history = this.state.history;
  	const current = history[this.state.stepNumber];
  	let winnerMove = calculateWinner(current.squares);

  	const moves = history.map((step, move) => {
  		const desc = move ? ('Move #' + move) : 'Game Start';
  		return (
  			<li key={move}>
  				<a href="#" onClick={() => this.jumpTo(move)}>{desc} { move !== 0 ? '- Player: ' + (move % 2 === 0 ? 'O' : 'X') : ''}</a>
  			</li>
  		);
  	});

  	let status;
  	if (winnerMove) {
  		status = "Winner: " + winnerMove.player;
  	} else {
      winnerMove = [];
    	status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  	}

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          	squares={current.squares}
            winnerLines={winnerMove.lines}
          	onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

function isWinnerSquare(winnerLines, i) {
  if (winnerLines)
    return (winnerLines.indexOf(i) > -1);
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
			return {player: squares[a], lines: lines[i]};
		}
	}

	for (let i = 0; i < squares.length; i++) {
		if (!squares[i]) 
			return null;
	}
	return {player: "Draw"};
}

function GameName(props) {
  return <h1>{props.name}</h1>;
}

// ========================================

ReactDOM.render(
  <div>
    <GameName name="Tic-tac-toe" />
    <Game />
  </div>,
  document.getElementById('root')
);
