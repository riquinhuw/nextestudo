import React from 'react';

function JogarTtt(){
    return (<div class="max-h-full w-full p-6 bg-blue-400">
        <h1 class="h-50 min-w-max  text-indigo-100 text-6xl text-center" >Jogo da Velha Local</h1>
        
        <div>
            <Game />
        </div>

    </div>)
}

  function Square(props) {
    return (
      <button 
        className="square" 
        onClick={props.onClick}
        class=" bg-white border-solid border-2 border-black float-left text-base font-bold h-9 -mr-0.5 -mt-0.5 p-0 text-center w-9"
        >
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
            value={this.props.squares[i]} 
            onClick={()=> this.props.onClick(i)}
        />
        );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' :'O');
      }
  
      return (
        <div>
          <div className="board-row" class="clear-both table">
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
    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    handleClick(i){
        const history = this.state.history;    
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' :'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[history.length-1];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player; ' + (this.state.xIsNext ? 'X' : 'O');
        }
      return (
        <div className="game" class="flex flex-row">
          <div className="game-board">
            <Board 
                squares={current.squares}
                onClick={(i)=> this.handleClick(i)}
            />
          </div>
          <div className="game-info" class="ml-5">
            <div class="mb-3" >{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
 

export default JogarTtt

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