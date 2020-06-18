import React, { Component } from "react";
import { CardList } from "./components/CardList";
import { robotFriends } from "./robotFriends";
import "./App.css";
import { FilterBots } from "./components/FilterBots";

export default class App extends Component {
  state = {
    robotFriends: robotFriends,
    searchbox: "",
  };

  filterOnChange = (event) => {
    this.setState({ searchbox: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <h1>RoboFriends</h1>
        <FilterBots filterFriends={this.filterOnChange} />
        <CardList
          robotFriends={this.state.robotFriends.filter((robot) => {
            return robot.name
              .toLowerCase()
              .includes(this.state.searchbox.toLowerCase());
          })}
        />
      </div>
    );
  }
}
