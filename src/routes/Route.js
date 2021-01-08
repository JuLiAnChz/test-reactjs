import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import DashboardLayout from '../theme/dashboard.theme';
import { useSelector } from "react-redux";

function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const auth = useSelector(state => state.auth);

  const signed = auth && auth.loggedIn;

  if (isPrivate && !signed) {
    return <Redirect to="/signin" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DashboardLayout : DashboardLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.protoTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
}

export default RouteWrapper;