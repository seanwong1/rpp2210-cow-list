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
        <h1>{this.state.displayCow}</h1>
        <h2>{this.state.displayCowDesc}</h2>
        <Add submitCow={this.submitCow} />
        <CowList cows={this.state.cows} getDisplayCow={this.getDisplayCow} />
        <button onClick={() => {this.getCows}}>Get Cows</button>
      </div>
    )
  }
}

export default App;