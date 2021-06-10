import React, { Component } from "react";

import CardList from "../js/CardList";
import FilterBots from "./FilterBots";
import Loading from "../js/Loading";
import "../css/HomePage.css";



class HomePage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = (robotFriends) => {
    return robotFriends.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };
  render() {
    const { onSearchChange, robotFriends, isPending } = this.props;
    return !isPending ? (
      <Loading />
    ) : (
      <div className="tc">
        <h1 className="f1">botFriends</h1>
        <FilterBots searchChange={onSearchChange} />
        <CardList robotFriends={this.filterRobots(robotFriends)} />
      </div>
    );
  }
}
export default HomePage;
