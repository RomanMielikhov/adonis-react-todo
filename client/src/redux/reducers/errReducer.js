import { CLEAR_ERR, SET_ERR } from '../types';

const initialState = {
  err: null,
};
export const errReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERR:
      return { ...state, err: action.payload };
    case CLEAR_ERR:
      return { ...state, err: null };
    default:
      return state;
  }
};
