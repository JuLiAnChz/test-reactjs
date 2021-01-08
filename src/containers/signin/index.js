import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';

// Alert
import {alertActions} from '../../redux/actions';
import {userActions} from '../../redux/actions';

// Assets
import AvatarImage from '../../images/avatar_img.svg';
import WaveImage from '../../images/wave.svg';

class SignIn extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      errors: {
        email: '',
        password: ''
      }
    });

    const {email, password} = this.state;
    if(!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) {
      this.setState({
        errors: {
          email: 'Debes ingresar un email válido',
          password: ''
        }
      });
      return;
    }

    if(password.length < 7) {
      this.setState({
        errors: {
          email: '',
          password: 'Debes ingresar mínimo 7 caracteres'
        }
      });
      return;
    }

    if (!new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})").test(password)) {
      this.setState({
        errors: {
          email: '',
          password: 'La contraseña debe contener al menos 1 mayuscula, 1 minuscula y 1 número'
        }
      });
      return;
    }

    this.props.login(email, password);

    /* userService.login(email, password).then((cUser) => {
      console.log(cUser);
    }).catch((error) => {
      const type = error.response && (error.response.data.error || 'normal');
      let messages;
      switch(type) {
        case 'invalid_credentials':
          messages = 'Usuario/contraseña inválidos';
        break;

        case 'could_not_create_token':
          messages = 'Se ha producido un error al iniciar sesión, contactese con el administrador del sistema';
        break;

        default:
          messages = 'No es posible iniciar sesión, intentelo más tarde';
      }
      this.props.showErrorAlert(messages)
    }); */
  }

  render() {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
        <img className="fixed bottom-0 left-0 right-0" src={WaveImage} alt="Bottom Wave" />
        <div className="shadow border rounded p-4 bg-white">
          <form noValidate={true} onSubmit={this.handleSubmit} className="flex flex-col justify-center items-center z-50">
            <img src={AvatarImage} alt="Avatar" className="w-32" />
            <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
              Ingreso
            </h2>
            <div className="relative">
              <FontAwesomeIcon className="absolute text-gray-600 text-xl" icon={['fas', 'user']} />
              <input
                type="text"
                name="email"
                placeholder="Correo electrónico"
                value={this.state.email}
                onChange={this.handleChange}
                className="pl-8 border-b-2 font-display text-lg focus:outline-none focus:border-gray-700 transition-all duration-500"
                required />
            </div>
            {
              this.state.errors.email &&
              <div>
                <small className="inline-block text-sm text-red-500">{this.state.errors.email}</small>
              </div>
            }
            <div className="relative mt-8">
              <FontAwesomeIcon className="absolute text-gray-600 text-xl" icon={['fas', 'lock']} />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={this.state.password}
                onChange={this.handleChange}
                className="pl-8 border-b-2 font-display text-lg focus:outline-none focus:border-gray-700 transition-all duration-500"
                required />
            </div>
            {
              this.state.errors.password &&
              <div>
                <small className="inline-block text-sm text-red-500 break-words">{this.state.errors.password}</small>
              </div>
            }
            <button className="py-3 px-20 bg-blue-500 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500" type="submit">Iniciar Sesión</button>
          </form>
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
    showErrorAlert: (message) => dispatch(alertActions.error(message)),
    login: (email, password) => dispatch(userActions.login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);