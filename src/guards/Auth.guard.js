import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthGuard = ({component: Component, auth, ...rest}) => {
  console.log(auth)
  return <Route {...rest} render={(props) => (auth === true ? <Component {...props} /> : <Redirect to='/dashboard' />) } />
};

export default AuthGuard;