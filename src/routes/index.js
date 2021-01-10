import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../containers/signin';
import Main from '../containers/main';
import Todos from '../containers/todo';
import Users from '../containers/users';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" exact component={SignIn} />
      <Route path="/dashboard" component={Main} isPrivate />
      <Route path="/todos" component={Todos} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Redirect from="*" to="/dashboard" />
    </Switch>
  )
}