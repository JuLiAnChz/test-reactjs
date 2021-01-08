import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500 transform duration-500">
                  <FontAwesomeIcon className="pr-0 md:pr-3 text-2xl" icon={['fas', 'home']} />
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Inicio</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500 transform duration-500">
                  <FontAwesomeIcon className="pr-0 md:pr-3 text-2xl" icon={['fas', 'users']} />
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">Usuarios</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500 transform duration-500">
                  <FontAwesomeIcon className="pr-0 md:pr-3 text-blue-600 text-2xl" icon={['fas', 'tasks']} />
                  <span className="md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Tareas</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}