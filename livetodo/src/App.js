import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbzj7ECyOKnlvFENaZvD7S4RDEKVKBfZAweUoEtyKYt-RhxS4lQm/exec?todo=' +
          this.state.value
      )
      .then(respose => {
        this.setState({ todo: respose.data });
      });
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
