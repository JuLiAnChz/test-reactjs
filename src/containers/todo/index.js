import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from 'date-fns';

// Alert
import { alertActions, todoActions } from '../../redux/actions';

class Todo extends Component {
  constructor(props) {
		super(props);
		this.state = {
			cHover: null,
			cModify: null,
			todo: {
				title: ''
			}
		}
		this.props.allTodos();
	}

	finished(todo) {
		this.props.finishTodo(todo);
	}

	renderButtons(todo) {
		if(todo.status.id === 'PENDING') {
			return <button onClick={() => this.finished(todo)} className="text-green-500"><FontAwesomeIcon icon={['fas', 'check']} /></button>
		}
		return <div></div>;
	}

	modifyTitle(todo) {
		const newTitle = document.getElementById(`txtModify${todo.id}`).value;
		this.props.updateTodo(todo, newTitle).then(() => {
			this.setState({
				cModify: null
			});
		});
	}

	addTodo() {
		if (!this.state.todo.title) {
			this.props.showErrorAlert('Debe ingresar un titulo');
			return;
		}
		this.props.addTodo(this.state.todo.title).then(() => {
			this.setState({
				todo: {
					title: ''
				}
			});
		});
	}

	removeTodo(todo) {
		this.props.removeTodo(todo);
	}

	formatDate(dateString) {
		return format(new Date(dateString), 'dd/MM/yyyy h:m:s a');
	}

  render() {
    return (
			<div className="flex-none w-full">
				<div className="mb-3 pt-0 grid grid-cols-1 gap-2">
					<input
						placeholder="titulo"
						type="text"
						className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
						value={this.state.todo.title}
						onChange={(event) => this.setState({todo: {title: event.target.value}})}
					/>
					<button
						className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 transition-all duration-500"
						type="button"
						onClick={() => this.addTodo()}>
						Agregar
					</button>
				</div>
				<div className="grid grd-cols-1 gap-2 md:gap-4">
					{
						this.props.todos.map((todo, index) => (
							<div key={index}
								onMouseEnter={() => {this.setState({cHover: index})}}
								onMouseLeave={() => {this.setState({cHover: null})}}
								className={`bg-white w-full rounded-lg shadow-lg py-5 px-5 transform md:hover:translate-x-3 transition-all duration-150 ${todo.status.id === 'FINISHED' ? 'bg-green-200' : ''}`}>
								<div className="grid grid-cols-1 md:grid-cols-12 gap-2">
									<div className="md:col-span-11">
										<h1 className="text-lg font-bold text-gray-700">
											{
												(this.state.cModify === index &&
													<div className="grid grid-cols-12">
														<input className="col-span-11 bg-white w-full rounded border shadow text-sm outline-none focus:outline-none px-2 py-1" id={`txtModify${todo.id}`} defaultValue={todo.title} />
														<button className="text-white bg-green-500" onClick={() => this.modifyTitle(todo)}><FontAwesomeIcon icon={['fas', 'save']} /></button>
													</div>
												) || todo.title
											}
										</h1>
										<small className="text-sm text-gray-400">Creado: {this.formatDate(todo.created_at)}</small>
									</div>
									<div className={`text-right transition-all duration-300 opacity-1 grid grid-cols-3 md:grid-cols-1 gap-2 ${this.state.cHover === index ? 'md:opacity-1' : 'md:opacity-0'}`}>
										{
											this.renderButtons(todo)
										}
										<button
											onClick={() => {
												if (this.state.cModify === index) {
													this.setState({cModify: null});
												} else {
													this.setState({cModify: index});
												}
											}} className="text-yellow-500"><FontAwesomeIcon icon={['fas', 'pencil-alt']} /></button>
										<button onClick={() => this.removeTodo(todo)} className="text-red-500"><FontAwesomeIcon icon={['fas', 'trash']} /></button>
									</div>
								</div>
							</div>
						))
					}
				</div>
      </div>
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
		showErrorAlert: (message) => dispatch(alertActions.error(message)),
		allTodos: () => dispatch(todoActions.all()),
		finishTodo: (todo) => dispatch(todoActions.finished(todo)),
		addTodo: (title) => dispatch(todoActions.add(title)),
		removeTodo: (todo) => dispatch(todoActions.remove(todo)),
		updateTodo: (todo, title) => dispatch(todoActions.edit(todo, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);