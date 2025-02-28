import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // increment count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // decrement count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // reset count
  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Counter Application</h1>
        <h2>{this.state.count}</h2>
        <div className="buttons">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
