import React, { useEffect, useState } from 'react';
import { ToDoListItem } from './ToDoListItem';
import { useToDo } from '../hooks/todo.hook';

export const ToDoList = () => {
  const { deleteToDo, updateToDo, addToDo, getToDo } = useToDo();
  const [data, setDate] = useState(null);
  const [description, setDescription] = useState('');

  const addToDoHendler = async () => {
    if (description.trim()) {
      await addToDo(description);
      const todo = await getToDo();
      setDate(todo);
      setDescription('');
    }
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const deleteHandler = (id) => {
    deleteToDo(id);
    setDate(data.filter((todo) => (todo.id === id ? false : true)));
  };

  const changeHandler = (id) => {
    setDate(
      data.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          updateToDo(todo.id, todo.completed);
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const ToDoData = async () => {
      const todo = await getToDo();
      setDate(todo);
    };
    ToDoData();
  }, [getToDo]);

  if (data) {
    return (
      <div className="conteiner mt-3">
        <div className="row mt-1">
          <div className="col-6 offset-2">
            <input
              type="text"
              className="form-control"
              placeholder="ToDo description"
              name="description"
              value={description}
              onChange={descriptionHandler}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-primary float-right"
              onClick={addToDoHendler}
            >
              Add ToDo
            </button>
            <div />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8 offset-2 mt-2">
            <ul className="list-group">
              {data.map((todo) => {
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
