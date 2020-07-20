import { useCallback, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const useToDo = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();

  const deleteToDo = useCallback(
    async (id) => {
      try {
        await request(`api/tasks/${id}`, 'DELETE', null, {
          Authorization: `Bearer ${auth.token}`,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [auth.token, request]
  );

  const updateToDo = useCallback(
    async (id, completed) => {
      try {
        await request(
          `api/tasks/${id}`,
          'PATCH',
          { completed },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
    [auth.token, request]
  );

  const addToDo = useCallback(
    async (description) => {
      try {
        await request(
          `api/tasks`,
          'POST',
          { description },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
    [auth.token, request]
  );

  const getToDo = useCallback(async () => {
    try {
      const data = await request('api/tasks', 'GET', null, {
        Authorization: `Bearer ${auth.token}`,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [auth.token, request]);

  return { deleteToDo, updateToDo, addToDo, getToDo };
};
