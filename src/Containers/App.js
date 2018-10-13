import React, { Component } from 'react';
import CardList from '../Components/CardList/CardList';
import SearchBox from '../Components/SearchBox/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from './ErrorBoundry';
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
    const { robots, searchTerm } = this.state;
    const filteredRobots = robots.filter(robot => {
      const lowercaseName = robot.name.toLowerCase();
      return lowercaseName.includes(searchTerm.toLowerCase());
    });

    return !robots.length ? <h1>Loading...</h1> : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchTerm={searchTerm} handleSearch={this.handleSearch}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
