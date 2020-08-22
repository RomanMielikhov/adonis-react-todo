import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToDoList } from './ToDoList';
import { Authentication } from './Authentication';

export const Routes = (isAuthentication) => {
  if (isAuthentication) {
    return (
      <Switch>
        <Route path="/" exact>
          <ToDoList />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <Authentication />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  );
};
