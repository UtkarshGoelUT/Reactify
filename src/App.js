import React, { Component } from 'react';
import classes from './App.module.css'
import Navbar from './components/UI/Navbar/Navbar';
import Home from './containers/Home/Home';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Home />
      </div>
    )
  };
};

export default App;