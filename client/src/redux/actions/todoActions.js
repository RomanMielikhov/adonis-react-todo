import { ADD_TODO, GET_TODO, DELETE_TODO, UPTDATE_TODO } from '../types';
import { useHttp as request } from '../../hooks/http.hook';

export function addToDo(description, token) {
  return async (dispatch) => {
    const todo = await request(
      `api/tasks`,
      'POST',
      { description },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
}

export function getToDo(token) {
  return async (dispatch) => {
    const data = await request('api/tasks', 'GET', null, {
      Authorization: `Bearer ${token}`,
    });
    dispatch({
      type: GET_TODO,
      payload: data,
    });
  };
}

export function deleteToDo(id, token) {
  return async (dispatch) => {
    await request(`api/tasks/${id}`, 'DELETE', null, {
      Authorization: `Bearer ${token}`,
    });
    dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  };
}

export function uptdateToDo(id, todos, token) {
  return async (dispatch) => {
    todos.map(async (todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        await request(
          `api/tasks/${id}`,
          'PATCH',
          { completed: todo.completed },
          {
            Authorization: `Bearer ${token}`,
          }
        );
        dispatch({
          type: UPTDATE_TODO,
          payload: { id, completed: todo.completed },
        });
      }
    });
  };
}
