import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import CowList from './CowList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      displayCow: '',
      displayCowDesc: ''
    };

    this.getDisplayCow = this.getDisplayCow.bind(this);
    this.getCows = this.getCows.bind(this);
  }

  componentDidMount() {
    this.getCows()
  }

  getDisplayCow(name, description) {
    this.setState({displayCow: name, displayCowDesc: description});
  }

  getCows() {
    axios.get('/api/cows')
      .then((response) => {
        var cowsData = response.data
        this.setState({cows: cowsData});
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
      .then(
        this.getCows()
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Cows Cows Cows</h1>
        <h2>{this.state.displayCow}</h2>
        <h3>{this.state.displayCowDesc}</h3>
        <Add submitCow={this.submitCow} />
        <CowList cows={this.state.cows} getDisplayCow={this.getDisplayCow} />
        <button onClick={this.getCows}>Get Cows</button>
      </div>
    )
  }
}

export default App;