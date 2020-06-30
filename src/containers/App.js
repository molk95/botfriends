import React, { Component } from "react";
import { connect } from "react-redux";
import { CardList } from "../components/CardList";
import { FilterBots } from "../components/FilterBots";
import Loading from "../components/Loading";
import "./App.css";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};


class App extends Component {
  state = {
    robotFriends: [],
   
    
  };
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {this.setState({ robotFriends: users })});
  }
  render() {
    const { robotFriends } = this.state; 
    const {  searchField, onSearchChange } = this.props;
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
