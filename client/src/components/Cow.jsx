import React, { Component } from 'react';

class Cow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <div>{this.props.cow.Name}</div>
        <div>{this.props.cow.Description}</div>
      </div>
    )
  }
}

export default Cow;