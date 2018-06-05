import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Dashboard from './component/Dashboard/Dashboard'
//import Wizard from './component/Wizard/Wizard'
import Header from './component/Header/Header'
import routes from './route'
//import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      <div className="Main">
        {routes}
      </div>
      </div>
    );
  }
}

export default App;
