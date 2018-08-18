import React, { Component } from "react";

import * as Action from "./Action";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { increment, decrement } = this.props;

    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.props.count}</h1>
        <p className="text-center">
          <button onClick={() => increment()} className="btn btn-primary mr-2">
            Increase
          </button>
          <button onClick={() => decrement()} className="btn btn-primary mr-2">
            Decrement
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

export default connect(
  mapStateToProps,
  Action
)(App);
