import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrementCount = this.handleIncrementCount.bind(this);
    this.handleDecrementCount = this.handleDecrementCount.bind(this);
  }
  handleIncrementCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  handleDecrementCount() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      <div id="counter">
        <h2>Counter App</h2>
        <p>Count: {this.state.count}</p>
        <button
          type="button"
          name="Increment"
          onClick={this.handleIncrementCount}
        >
          Increment
        </button>
        <button
          type="button"
          name="Decrement"
          onClick={this.handleDecrementCount}
        >
          Decrement
        </button>
      </div>
    );
  }
}
