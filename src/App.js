import React, { Component } from 'react';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';
import logo from './logo.svg';
import './App.css';
import { robots } from './robots';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      robots: robots
    }
  }

  handleSearch = input => {
    this.setState({ searchTerm: input });
    
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      const lowercaseName = robot.name.toLowerCase();
      return lowercaseName.includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
