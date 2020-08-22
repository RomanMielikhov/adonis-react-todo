import React from 'react';

export const ToDoListItem = (props) => {
  const classes = ['list-group-item', 'mt-2'];

  if (props.completed) {
    classes.push('done');
  }
  return (
    <li className={classes.join(' ')}>
      <div className="row">
        <div className="col">
          <input
            type="checkbox"
            checked={props.completed || false}
            aria-label="Checkbox for following text input"
            onChange={() => props.onChange(props.id)}
          />
        </div>
        <div className="col-10">{props.description}</div>
        <div className="col">
          <button
            className="btn btn-outline-danger"
            onClick={() => props.onClick(props.id)}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
};
