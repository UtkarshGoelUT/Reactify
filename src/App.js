import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import classes from './App.module.css'
import Navbar from './components/UI/Navbar/Navbar';
import Home from './containers/Home/Home';
import LoginPage from './components/UI/LoginPage/LoginPage';
import {UserProvider} from './context/userContext';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <UserProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/login' exact>
                <LoginPage/>
              </Route>
            </Switch>
          </Router>
        </UserProvider>
      </div>
    )
  };
};

export default App;