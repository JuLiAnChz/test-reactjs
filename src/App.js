import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignIn from './containers/signin';
import Main from './containers/main';
import AuthGuard from './guards/Auth.guard';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.isAutenticated = false;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <AuthGuard exact path='/' component={Main} auth={this.isAutenticated} />
        </Switch>
      </Router>
    )
  }
};
