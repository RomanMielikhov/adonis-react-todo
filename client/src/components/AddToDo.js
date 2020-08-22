import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../redux/actions/todoActions';

export const AddToDo = () => {
  const [description, setDescription] = useState('');
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const addToDoHendler = () => {
    if (description.trim()) {
      dispatch(addToDo(description, token));
      setDescription('');
    }
  };

  return (
    <div className="row mt-1">
      <div className="col-6 offset-2">
        <input
          type="text"
          className="form-control"
          placeholder="ToDo description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
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
  );
};
