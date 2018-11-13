import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      todo: []
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    this.setState({ todo: [...this.state.todo, this.state.value] });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.value} />
        <button onClick={this.handleClick}>ボタン</button>
        <div>
          {this.state.todo.map(t => (
            <div>{t}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
