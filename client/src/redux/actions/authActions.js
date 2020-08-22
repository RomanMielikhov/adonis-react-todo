import { LOGIN, LOGOUT, STORAGE } from '../types';
import { setErr, clearErr } from './errActions';
import { setLoading } from './loadingAction';
import { useHttp as request } from '../../hooks/http.hook';

export function login(data, token) {
  return async (dispatch) => {
    if (token) {
      dispatch({
        type: LOGIN,
        payload: token,
      });
      return;
    }
    dispatch(setLoading(true));
    try {
      const response = await request('/api/auth/login', 'POST', { ...data });
      localStorage.setItem(STORAGE, JSON.stringify({ token: response.token }));
      dispatch({
        type: LOGIN,
        payload: response.token,
      });
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setErr(error.message));
      setTimeout(() => {
        dispatch(clearErr());
      }, 5000);
    }
  };
}

export function register(data) {
  return async (dispatch) => {
    try {
      const response = await request('/api/auth/register', 'POST', { ...data });
      localStorage.setItem(STORAGE, JSON.stringify({ token: response.token }));
      dispatch({
        type: LOGIN,
        payload: response.token,
      });
    } catch (error) {
      dispatch(setErr(error.message));
      setTimeout(() => {
        dispatch(clearErr());
      }, 5000);
    }
  };
}

export function logout() {
  return async (dispatch) => {
    localStorage.removeItem(STORAGE);
    dispatch({
      type: LOGOUT,
    });
  };
}
