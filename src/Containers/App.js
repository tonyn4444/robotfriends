import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList/CardList';
import SearchBox from '../Components/SearchBox/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import { setSearchField } from '../redux/search/actions';
import { fetchRobots } from '../redux/robots/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    const { setSearchField, searchTerm, robots, robotsPending, error } = this.props;
    const filteredRobots = robots.filter(robot => {
      const lowercaseName = robot.name.toLowerCase();
      return lowercaseName.includes(searchTerm.toLowerCase());
    });

    if (error) {
      return <h1>Uh oh, something went wrong...</h1>
    }

    return robotsPending ? <h1 style={{color: 'red'}}>Loading...</h1> : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchTerm={searchTerm} handleSearch={setSearchField}/>
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
  searchTerm: state.search.searchField,
  robotsPending: state.robots.robotsPending,
  error: state.robots.error
});

// We can map action creators to our component under this.props
// When we invoke the functions, an anonymous function is invoked and that in turn causes
// dispatch to be invoked, along with the action creator invocation
const mapStateToProps = dispatch => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    setSearchField: (searchTerm) => dispatch(setSearchField(searchTerm))
  }
}

export default connect(selectors, mapStateToProps)(App);
