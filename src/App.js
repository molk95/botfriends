import React, { Component } from "react";
import { CardList } from "./components/CardList";
import "./App.css";
import { FilterBots } from "./components/FilterBots";
import Loading from './components/Loading'
import Scroll from './components/Scroll'

export default class App extends Component {
  state = {
    robotFriends: [],
    searchbox: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robotFriends:users }));
  }

  filterOnChange = (event) => {
    this.setState({ searchbox: event.target.value });
  };
  render() {
    if (this.state.robotFriends.length ===0 ) {
      return  <Loading />
    }else {
      return (
        <div className="container">
          <h1 className="title">RoboFriends</h1>
          <FilterBots filterFriends={this.filterOnChange} />
          <Scroll>
          <CardList
            robotFriends={this.state.robotFriends.filter((robot) => {
              return robot.name
                .toLowerCase()
                .includes(this.state.searchbox.toLowerCase());
            })}
          />
          </Scroll>
        </div>
      );
    }
    
  }
}
