import React from 'react';
import { useAuth } from '../hooks/auth.hook';

export const Navbar = () => {
  const { logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/auth" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
