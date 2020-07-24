import React, { Component } from "react";

export default class CounterButton extends Component {
  state = {
    count: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  render() {
    return <div>
        <button
        id='counter'
        color={this.props.color}
        onClick={
            () => this.setState(state => ({
                count:state.count + 1
            }))
        }> Count: {this.state.count} </button>
    </div>;
  }
}
