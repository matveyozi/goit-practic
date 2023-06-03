import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? initialState;
  });

  const callback = () => {
    localStorage.setItem(key, JSON.stringify(state));
  };

  useEffect(callback, [key, state]);

  return [state, setState];
};
