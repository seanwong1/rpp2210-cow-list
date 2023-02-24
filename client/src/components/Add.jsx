import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: '',
      cowDesc: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value
    });
  }

  handleSubmit(event) {
    this.props.submitCow(this.state.cowName, this.state.cowDesc);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Cow Name:
          <input id="cowName" value={this.state.cowName} onChange={this.handleChange} />
        </label>
        <label>
          Cow Description:
          <input id="cowDesc" value={this.state.cowDesc} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Add;