import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Routes/Home'
import Center from './Routes/Center'
import {Router, Link, Route, history } from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router history={history}>
          <div className="app-root">
            <div className="left">
              <Link to='/home'>Home</Link>
              <div></div>
              <Link to='/center'>Center</Link>
            </div>

            <div className="right">
              <div>
                <Route
                  path='/home'
                  component={Home}
                />
                <Route
                  path='/center'
                  component={Center}
                />
              </div>
            </div>
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;
