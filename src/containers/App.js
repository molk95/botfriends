import React, { Component } from "react";
import { connect } from "react-redux";
import { CardList } from "../components/CardList";
import { FilterBots } from "../components/FilterBots";
import Loading from "../components/Loading";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

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
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { searchField, onSearchChange, robotFriends, isPending } = this.props;
    return !robotFriends.length ? (
      <Loading />
    ) : (
      <div className="container">
        <h1 className="title">botFriends</h1>
        <FilterBots searchChange={onSearchChange} />

        <CardList
          robotFriends={robotFriends.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
          })}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
