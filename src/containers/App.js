import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import HomePage from "../components/js/HomePage";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robotFriends: state.requestRobots.robotFriends,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()), //action
  };
};

class App extends Component {
  render() {
    return <HomePage {...this.props} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
