import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

function JogarTtt(){
    return (<div class="max-h-full w-full p-6 bg-blue-400">
        <h1 class="h-50 min-w-max  text-indigo-100 text-6xl text-center" >Jogar Jogo da Velha</h1>
        
        <div>
            <Game />
        </div>

    </div>)
}

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button
          className="square"
          onClick={() => this.setState({value: 'X'})}
          class=" bg-white border-solid border-2 border-black float-left text-base font-bold h-9 -mr-0.5 -mt-0.5 p-0 text-center w-9"
        >
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status" class="mb-3">{status}</div>
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
    render() {
      return (
        <div className="game" class="flex flex-row">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info" class="ml-5">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
 

export default JogarTtt