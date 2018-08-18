import React, { Component } from "react";

import store from "./Store";
import * as Action from "./Action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState()
    };
  }
  onIncrement = () => {
    store.dispatch(Action.increment());
  };

  onDecrement = () => {
    store.dispatch(Action.decrement());
  };

  render() {
    store.subscribe(() =>
      this.setState({
        count: store.getState()
      })
    );
    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.state.count}</h1>
        <p className="text-center">
          <button onClick={this.onIncrement} className="btn btn-primary mr-2">
            Increase
          </button>
          <button onClick={this.onDecrement} className="btn btn-primary mr-2">
            Decrement
          </button>
        </p>
      </div>
    );
  }
}

export default App;
