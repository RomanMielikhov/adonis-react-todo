import React from 'react';
import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = Routes(isAuthenticated);
  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
