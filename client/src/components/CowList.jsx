import React, { Component } from 'react';
import Cow from './Cow.jsx';

class CowList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var cows = this.props.cows.map((cow) => {
      return (
        <div>
          <Cow cow={cow} />
        </div>
      )
    })
    return (
      <div>
        {cows}
      </div>
    )
  }
}

export default CowList;