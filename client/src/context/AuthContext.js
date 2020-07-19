import { createContext } from 'react';

function emp() {}
export const AuthContext = createContext({
  token: null,
  login: emp,
  logout: emp,
  iaAuthenticated: false,
});
