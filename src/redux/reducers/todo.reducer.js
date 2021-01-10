import {
	LOAD_TODOS,
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	TODO_UPDATE
} from '../types';

const reducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TODOS:
      return action.todos;
    case ADD_TODO:
			const nTodo = action.todo;
      return [
        ...state,
        nTodo
			];
		case TODO_UPDATE:
    case TOGGLE_TODO:
			return state.map(todo =>
				(todo.id === action.todo.id) ?
					action.todo : todo);
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.todo.id);
    default:
      return state;
  }
}

export default reducer;