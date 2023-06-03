import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

import SharedLayout from './SharedLayout/SharedLayout';

import Quiz from 'pages/Quiz';

import { useLocalStorage } from 'hooks/useLocalStorage';

const App = () => {
  const [words, setWords] = useLocalStorage('words', []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home words={words} setWords={setWords} />} />
        <Route path="quiz" element={<Quiz words={words} />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
