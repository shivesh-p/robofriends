import React, { Component } from "react";
import CardList from "./CardList";
import {connect} from 'react-redux'
import SearchComponent from "./SearchComponent";
import "./App.css";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
import { setSearchField } from "./actions";

const mapStateToProps=state=>{
  return{
    searchField:state.searchField
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
  onSearchChange:(event)=>dispatch(setSearchField(event.target.value))
}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }
  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots } = this.state;
    const {searchField,onSearchChange}=this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchComponent searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
