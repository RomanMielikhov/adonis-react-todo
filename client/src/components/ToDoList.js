import React, { useEffect, useState } from 'react';
import { ToDoListItem } from './ToDoListItem';
import { useToDo } from '../hooks/todo.hook';

export const ToDoList = () => {
  const { deleteToDo, updateToDo, addToDo, getToDo } = useToDo();
  const [data, setDate] = useState(null);

  const deleteHendler = (id) => {
    deleteToDo(id);
    setDate(data.filter((i) => (i.id === id ? false : true)));
  };

  const changeHendler = (id) => {
    //updateToDo();
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
      <div className="conteiner">
        <div className="row mt-1">
          <div className="col-6 offset-2">
            <input
              type="text"
              className="form-control"
              placeholder="ToDo description"
              name="description"
            />
          </div>
          <div className="col-2">
            <button type="button" className=" btn btn-primary float-right">
              Add ToDo
            </button>
            <div />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8 offset-2 mt-2">
            <ul className="list-group">
              {data.map((i) => {
                return (
                  <ToDoListItem
                    key={i.id}
                    id={i.id}
                    description={i.description}
                    completed={i.completed}
                    onClick={deleteHendler}
                    onChange={changeHendler}
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
