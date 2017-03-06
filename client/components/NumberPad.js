import React, { Component } from 'react';

export default class NumberPad extends Component {
  _handleButtonClick (event) {
    console.log(event.target.innerHTML);
  }
  
  render () {
    return (
      <div className="number-pad-container">
        <div className="number-rows-container">
          <button onClick={(event) => this._handleButtonClick(event)}>7</button>
          <button onClick={(event) => this._handleButtonClick(event)}>8</button>
          <button onClick={(event) => this._handleButtonClick(event)}>9</button>
        </div>
        <div className="number-rows-container">
          <button onClick={(event) => this._handleButtonClick(event)}>4</button>
          <button onClick={(event) => this._handleButtonClick(event)}>5</button>
          <button onClick={(event) => this._handleButtonClick(event)}>6</button>
        </div>
        <div className="number-rows-container">
          <button onClick={(event) => this._handleButtonClick(event)}>1</button>
          <button onClick={(event) => this._handleButtonClick(event)}>2</button>
          <button onClick={(event) => this._handleButtonClick(event)}>3</button>
        </div>
        <div className="number-rows-container">
          <button onClick={(event) => this._handleButtonClick(event)}>0</button>
          <button onClick={(event) => this._handleButtonClick(event)}>.</button>
          <button onClick={(event) => this._handleButtonClick(event)}>=</button>
        </div>
      </div>
    )
  }
}