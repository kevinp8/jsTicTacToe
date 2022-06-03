import './App.css'
import React, { Component } from 'react'

const board = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '50%',
  margin: 'auto',
  textAling: 'center'
}

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      turn: 'X',
      boardContents: ['', '', '',
                      '', '', '',
                      '', '', ''],
      winner: ''

    }
    this.move = this.move.bind(this)
    this.checkWin = this.checkWin.bind(this)
    this.reset = this.reset.bind(this)
  }

  checkWin() {
    
    if (
      ((this.state.boardContents[0] === this.state.turn) && (this.state.boardContents[0] === this.state.boardContents[1]) && (this.state.boardContents[1] === this.state.boardContents[2])) ||
      ((this.state.boardContents[3] === this.state.turn) && (this.state.boardContents[3] === this.state.boardContents[4]) && (this.state.boardContents[4] === this.state.boardContents[5])) ||
      ((this.state.boardContents[6] === this.state.turn) && (this.state.boardContents[6] === this.state.boardContents[7]) && (this.state.boardContents[7] === this.state.boardContents[8])) ||

      ((this.state.boardContents[0] === this.state.turn) && (this.state.boardContents[0] === this.state.boardContents[3]) && (this.state.boardContents[3] === this.state.boardContents[6])) ||
      ((this.state.boardContents[1] === this.state.turn) && (this.state.boardContents[1] === this.state.boardContents[4]) && (this.state.boardContents[4] === this.state.boardContents[7])) ||
      ((this.state.boardContents[2] === this.state.turn) && (this.state.boardContents[2] === this.state.boardContents[5]) && (this.state.boardContents[5] === this.state.boardContents[8])) ||

      ((this.state.boardContents[0] === this.state.turn) && (this.state.boardContents[0] === this.state.boardContents[4]) && (this.state.boardContents[4] === this.state.boardContents[8])) ||
      ((this.state.boardContents[2] === this.state.turn) && (this.state.boardContents[2] === this.state.boardContents[4]) && (this.state.boardContents[4] === this.state.boardContents[6]))
    ) {
        console.log(this.state.turn)
        this.setState({
          winner: this.state.turn
        })
      } 
      else if (this.state.boardContents.every(i=> i!=='')) {
        this.setState({
          winner: 'No One'
        })
      }
      else {
        
        this.setState({
          turn: this.state.turn==='X' ? 'O' : 'X'
        })
        
      }
      
  }

  move(box) {
    if (box.target.textContent === '') {

      let clone = this.state.boardContents
      clone[parseInt(box.target.className)] = this.state.turn

      this.setState({
        board:  clone,
        
      }, this.checkWin)

    }
  }
  reset() {
    this.setState({
      turn: this.state.winner==='X' ? 'O' : 'X',
      boardContents: ['', '', '',
                      '', '', '',
                      '', '', ''],
      winner: ''

    })
  }

  render() {
    if (this.state.winner) {
      return (
        <div className='playAgain'>
          <h1>{this.state.winner} Wins!</h1>
          <button onClick={this.reset}>Play Again</button>
        </div>
      )
    } else {
      return (
        <section>
          <h1>{this.state.turn}'s turn</h1>
          <div style={board}>
            <div onClick={this.move} className='0'>{this.state.boardContents[0]}</div>
            <div onClick={this.move} className='1'>{this.state.boardContents[1]}</div>
            <div onClick={this.move} className='2'>{this.state.boardContents[2]}</div>
            <div onClick={this.move} className='3'>{this.state.boardContents[3]}</div>
            <div onClick={this.move} className='4'>{this.state.boardContents[4]}</div>
            <div onClick={this.move} className='5'>{this.state.boardContents[5]}</div>
            <div onClick={this.move} className='6'>{this.state.boardContents[6]}</div>
            <div onClick={this.move} className='7'>{this.state.boardContents[7]}</div>
            <div onClick={this.move} className='8'>{this.state.boardContents[8]}</div>
          </div>
        </section>
      )
    }
    
  }
}

export default App
