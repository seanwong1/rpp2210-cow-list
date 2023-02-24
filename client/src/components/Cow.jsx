import React, { Component } from 'react';

class Cow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <div onClick={(event) => this.props.getDisplayCow(event.target.innerText, this.props.cow.Description)} >{this.props.cow.Name}</div>
      </div>
    )
  }
}

export default Cow;