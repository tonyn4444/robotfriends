import React, { Component } from 'react';
import CardList from './CardList/CardList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { robots } = this.props;
    return (
      <div>
        <h1>RoboFriends</h1>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
