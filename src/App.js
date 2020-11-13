import React, { Component } from 'react';
import classes from './App.module.css'
import Navbar from './components/UI/Navbar/Navbar';
import Home from './containers/Home/Home';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Ngo from './components/UI/Ngos/Ngo/Ngo';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />
          
        </div>
        <Switch>
        <Route path="/somewhere" exact component={Ngo}>
            </Route>
            <Route path="/" exact component={Home}/>
          </Switch>
      </BrowserRouter>
    )
  };
};

export default App;