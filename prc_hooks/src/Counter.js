import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        {this.props.state.count}
        <button onClick={() => this.props.counter(count + 1)}>+</button>
        <button onClick={() => this.props.setState(count - 1)}>-</button>
      </div>
    );
  }
}
