import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../../const/API';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarImage from '../../images/avatar_img.svg';

/**
 * Assets
 */
import WaveImage from '../../images/wave.svg';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: ''
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
    const {email, password} = this.state;
    console.log(email, password);
    axios.post(API.SIGNIN, {}, {withCredentials: true}).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
        <img className="fixed bottom-0 left-0 right-0" src={WaveImage} alt="Bottom Wave" />
        <div className="shadow border rounded p-4 bg-white">
          <form onSubmit={this.handleSubmit} className="flex flex-col justify-center items-center z-50">
            <img src={AvatarImage} alt="Avatar" className="w-32" />
            <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
              Ingreso Plataforma
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
            <button className="py-3 px-20 bg-blue-500 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500" type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    );
  }
}