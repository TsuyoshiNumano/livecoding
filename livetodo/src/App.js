import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      todo: [],
      loadingFlag: false
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    if (e.which !== 13) {
      return;
    }
    this.setState({ loadingFlag: true });
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbzj7ECyOKnlvFENaZvD7S4RDEKVKBfZAweUoEtyKYt-RhxS4lQm/exec?todo=' +
          this.state.value
      )
      .then(respose => {
        this.setState({ todo: respose.data });
        this.setState({ loadingFlag: false });
      });
  };

  render() {
    return (
      <div>
        <TextField
          id="outlined-name"
          label="Name"
          value={this.state.value}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          onKeyPress={this.handleClick}
        />
        <div>
          {this.state.todo.map(t => (
            <div>{t}</div>
          ))}
        </div>
        {this.state.loadingFlag && <CircularProgress />}
      </div>
    );
  }
}

export default App;
