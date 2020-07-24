import React, { Component } from "react";

import CardList from "../components/CardList";
import FilterBots from "../components/FilterBots";
import Loading from "../components/Loading";
import "./HomePage.css";

import CounterButton from "../components/CounterButton";

class HomePage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = robotFriends => {
    return robotFriends.filter((robot) => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }
  render() {
    const { searchField, onSearchChange, robotFriends, isPending } = this.props;
    return !isPending ? (
      <Loading />
    ) : (
      <div className="tc">
        <h1 className="f1">botFriends</h1>
        <FilterBots searchChange={onSearchChange} />
        <CounterButton />
        <CardList
          robotFriends={this.filterRobots(robotFriends)}
        />
      </div>
    );
  }
}
export default HomePage;
