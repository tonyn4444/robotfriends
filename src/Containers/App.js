import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList/CardList';
import SearchBox from '../Components/SearchBox/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import { searchRobots } from '../redux/search/actions';
import { fetchRobots } from '../redux/robots/actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      robots: []
    }
  }

  componentDidMount() {
    this.props.fetchRobots();
  }

  handleSearch = input => {
    this.setState({ searchTerm: input });    
  }

  render() {
    const { searchRobots, searchTerm, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      const lowercaseName = robot.name.toLowerCase();
      return lowercaseName.includes(searchTerm.toLowerCase());
    });

    return !robots.length ? <h1>Loading...</h1> : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchTerm={searchTerm} handleSearch={searchRobots}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}


// selectors is a function that specifies which pieces of state we want to grab from our store and
// assign to our container as this.props
const selectors = state => ({
  robots: state.robots.robots,
  searchTerm: state.search.robotSearch,
});

export default connect(selectors, { searchRobots, fetchRobots })(App);
