import React from 'react';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App({ token }) {
  const isAuthenticated = !!token;
  const routes = Routes(isAuthenticated);
  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      {routes}
    </BrowserRouter>
  );
}
const mapStateToPros = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToPros, null)(App);
