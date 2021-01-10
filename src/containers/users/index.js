import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  constructor(props) {
		super(props);
  }

  render() {
    return (
			<div className="flex-none w-full">
				asdasd
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alert: state.alert,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);