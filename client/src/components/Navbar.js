import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/auth" onClick={dispatch(logout)}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
