import React from 'react';

export const ToDoListItem = (props) => {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        aria-label="Checkbox for following text input"
        onChange={() => props.onChange(props.id)}
      />
      {props.description}{' '}
      <button onClick={() => props.onClick(props.id)}>delete</button>
    </li>
  );
};
