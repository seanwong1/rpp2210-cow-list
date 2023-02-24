import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        hello guys
      </div>
    )
  }
}

export default App;