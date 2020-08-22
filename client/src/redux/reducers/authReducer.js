import { LOGOUT, LOGIN } from '../types';

const initialState = {
  token: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
