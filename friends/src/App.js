import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './Components/FriendsList'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <FriendsList /> */}
          <Link to="/login">Login</Link>
          <div />
          <Link to="/friends-list">Friends List</Link>
          <h1>Redux Friends</h1>
          <Route path = "/login" component ={Login} />
          <PrivateRoute exact path="/friends-list" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
