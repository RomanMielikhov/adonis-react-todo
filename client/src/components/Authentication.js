import React, { useState, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const Authentication = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { loading, request } = useHttp();
  const auth = useContext(AuthContext);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHendler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      auth.login(data.token);
    } catch (error) {}
  };

  const loginHendler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token);
    } catch (error) {}
  };

  return (
    <div>
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
                  className="m-2 btn btn-primary float-right"
                  disabled={loading}
                  onClick={loginHendler}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="m-2 btn btn-primary float-right"
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
