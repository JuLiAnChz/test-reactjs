import React, { Component } from 'react';
import { connect } from 'react-redux';

// assets
import WelcomeImage from '../../images/welcome.svg';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div className="flex-none w-full" style={ {height: '80vh'} }>
				<div className="flex flex-col justify-center items-center w-full h-full">
					<div className="text-2xl text-gray-600">
						Bienvenido <strong>{this.props.auth.user.user.name}</strong>
					</div>
					<div>
						<img src={WelcomeImage} alt="Welcome image" width="400" />
					</div>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);