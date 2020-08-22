import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/actions/authActions';
import { STORAGE } from '../redux/types';
import { Alert } from './Alert';

export const Authentication = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const err = useSelector((state) => state.err.err);
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE));
    if (data && data.token) {
      dispatch(login(null, data.token));
    }
  }, [login]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHendler = async () => {
    dispatch(register(form));
  };

  const loginHendler = async () => {
    dispatch(login(form));
  };

  return (
    <div>
      {err && <Alert err={err} />}
      <div className="container mt-5">
        <div className="col-8 offset-2">
          <div className="row">
            <h1>Auth Page</h1>
          </div>
          <div className="row mt-3">
            <div className="card" style={{ width: 100 + '%' }}>
              <div className="card-body">
                <h5 className="card-title">Authorization</h5>

                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="email"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                />
                <input
                  type="password"
                  className="form-control m-1"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}
                />
                <button
                  type="button"
                  className="m-2 btn btn-outline-primary float-right"
                  disabled={loading}
                  onClick={loginHendler}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="m-2 btn btn-outline-primary float-right"
                  onClick={registerHendler}
                  disabled={loading}
                >
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
