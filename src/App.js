import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchComponent from "./SearchComponent";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase());
      });
    return (
      <div className="tc">
        <h1 className="">RoboFriends</h1>
        <SearchComponent searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
