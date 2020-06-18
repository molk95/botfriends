import React, { Component } from "react";
import { CardList } from "../components/CardList";
import "./App.css";
import { FilterBots } from "../components/FilterBots";
import Loading from "../components/Loading";

export default class App extends Component {
  state = {
    robotFriends: [],
    searchbox: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robotFriends: users }));
  }

  filterOnChange = (event) => {
    this.setState({ searchbox: event.target.value });
  };
  render() {
    const { robotFriends, searchbox } = this.state;
    return !robotFriends.length ? (
      <Loading />
    ) : (
      <div className="container">
        <h1 className="title">RoboFriends</h1>
        <FilterBots filterFriends={this.filterOnChange} />

        <CardList
          robotFriends={robotFriends.filter((robot) => {
            return robot.name.toLowerCase().includes(searchbox.toLowerCase());
          })}
        />
      </div>
    );
  }
}
