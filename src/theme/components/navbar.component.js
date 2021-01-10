import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { todoActions, userActions } from '../../redux/actions';
import LogoImage from '../../images/logo.svg';
import AvatarImage from '../../images/avatar_img.svg';
import {
	Menu,
	MenuItem,
	MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

class Navbar extends Component {
  constructor(props) {
		super(props);
		this.props.allTodos();
  }

  render() {
		const totalTodos = this.props.todos.filter((todo) => todo.status.id === 'PENDING');
    return (
      <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <Link to="/dashboard">
              <span className="pl-2">
                <img src={LogoImage} width="100" className="-mt-5" />
              </span>
            </Link>
          </div>

          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2"></div>

          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <Link className="inline-block py-2 px-4 text-white no-underline" to="/dashboard"><FontAwesomeIcon className="text-xl" icon={['fas', 'search']} /></Link>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <Link className="relative inline-block py-2 px-4 text-white no-underline hover:text-underline" to="/todos">
                  <FontAwesomeIcon className="text-xl" icon={['fas', 'bell']} />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-2 bg-red-600 rounded-full">
										{totalTodos.length}
									</span>
                </Link>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
									<Menu menuButton={
										<MenuButton style={{'backgroundColor': 'transparent !important', color: 'white !important'}}>
											{this.props.auth.user.user.name} 
											<svg className="h-3 fill-current inline invisible md:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</MenuButton>
										}>
										<MenuItem onClick={() => this.props.logout()}>Cerrar Sesión</MenuItem>
									</Menu>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    alert: state.alert,
		auth: state.auth,
		todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
		allTodos: () => dispatch(todoActions.all()),
		logout: () => dispatch(userActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);