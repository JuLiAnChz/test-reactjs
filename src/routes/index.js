import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../containers/signin';
import Main from '../containers/main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" exact component={SignIn} />

      <Route path="/dashboard" component={Main} isPrivate />
    </Switch>
  )
}