import { ADD_TODO, GET_TODO, DELETE_TODO, UPTDATE_TODO } from '../types';

const initialState = {
  todoList: [],
};
export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case GET_TODO:
      return { ...state, todoList: action.payload };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) =>
          todo.id === action.payload.id ? false : true
        ),
      };
    case UPTDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
