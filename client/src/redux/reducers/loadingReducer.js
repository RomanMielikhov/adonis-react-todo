import { LOADING } from '../types';

const initialState = {
  loading: false,
};
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
