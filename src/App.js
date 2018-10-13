import React, { Component } from 'react';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';
import Scroll from './Scroll';
import logo from './logo.svg';
import './App.css';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots:  users }))
  }

  handleSearch = input => {
    this.setState({ searchTerm: input });
    
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      const lowercaseName = robot.name.toLowerCase();
      return lowercaseName.includes(this.state.searchTerm.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
