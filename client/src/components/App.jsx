import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getCows()
  }

  getCows() {
    axios.get('/api/cows')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  submitCow(name, description) {
    axios.post('/api/cows', {
      cowName: name,
      cowDesc: description
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Cows Cows Cows</h1>
        <Add submitCow={this.submitCow} />
        <button onClick={this.getCows}>Get Cows</button>
      </div>
    )
  }
}

export default App;