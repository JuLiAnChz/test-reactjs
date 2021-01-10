import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Routes from './routes';
import {alertActions} from './redux/actions';
import { history } from './helpers';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.props.closeAlert();
    });
  }

  render() {
    return (
      <div className="w-full">
        {
          this.props.alert.message &&
          <div className="text-white px-6 py-4 border-0 rounded fixed top-0 left-0 right-0 mb-4 bg-red-500 mx-2 mt-2 z-50">
            <span className="text-xl inline-block mr-5 align-middle">
              <FontAwesomeIcon icon={['fas', 'bell']} />
            </span>
            <span className="inline-block align-middle mr-8">
              {this.props.alert.message}
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={() => this.props.closeAlert()}>
              <span>×</span>
            </button>
          </div>
        }
        <Router history={history}>
          <Routes />
          {/* <Switch>
            <Route exact path='/signin' component={SignIn} />
            <AuthGuard exact path='/' component={Main} auth={this.isAutenticated} />
            <Redirect from="*" to="/signin" />
          </Switch> */}
        </Router>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    alert: state.alert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeAlert: () => dispatch(alertActions.clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);