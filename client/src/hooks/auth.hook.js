import { useState, useCallback, useEffect } from 'react';

const storage = 'tokenData';

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem(storage, JSON.stringify({ token: jwtToken }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storage);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storage));
    if (data && data.token) {
      login(data.token);
    }
  }, [login]);

  return { login, logout, token };
};
