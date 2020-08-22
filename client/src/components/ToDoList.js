import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToDoListItem } from './ToDoListItem';
import { AddToDo } from './AddToDo';
import { getToDo, deleteToDo, uptdateToDo } from '../redux/actions/todoActions';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const todos = useSelector((state) => state.toDo.todoList);
  const deleteHandler = (id) => {
    dispatch(deleteToDo(id, token));
  };

  const changeHandler = (id) => {
    dispatch(uptdateToDo(id, todos, token));
  };

  useEffect(() => {
    const ToDoData = () => {
      dispatch(getToDo(token));
    };
    ToDoData();
  }, [getToDo, token]);

  if (todos) {
    return (
      <div className="conteiner mt-3">
        <AddToDo />
        <div className="row mt-4">
          <div className="col-8 offset-2 mt-2">
            <ul className="list-group">
              {todos &&
                todos.map((todo) => {
                  return (
                    <ToDoListItem
                      key={todo.id}
                      id={todo.id}
                      description={todo.description}
                      completed={todo.completed}
                      onClick={deleteHandler}
                      onChange={changeHandler}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};
