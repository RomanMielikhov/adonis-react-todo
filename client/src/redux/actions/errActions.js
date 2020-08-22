import { SET_ERR, CLEAR_ERR } from '../types';

export const setErr = (err) => {
  return (dispatch) => {
    dispatch({ type: SET_ERR, payload: err });
  };
};
export const clearErr = () => {
  return {
    type: CLEAR_ERR,
  };
};
