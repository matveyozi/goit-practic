// import React, { Component } from 'react'

import { useState } from 'react';

// компоненти
import Navigation from './Navigation/Navigation';
import WordList from './WordList/WordList';
import WordsForm from './WordsForm/WordsForm';
import Filter from './Filter/Filter';

import { useLocalStorage } from 'hooks/useLocalStorage';

const App = () => {
  const [words, setWords] = useLocalStorage('words', []);
  // const [filter, setFilter] = useLocalStorage('filter', '');
  const [filter, setFilter] = useState('');

  const filterWord = e => {
    setFilter(e.target.value);
  };

  // фільтр слів
  const handleFilterWords = () => {
    return words.filter(
      word =>
        word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.enWord.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  // додавання слова
  const addWord = word => {
    setWords(prevState => [...prevState, word]);
  };

  // видалення слова
  const deleteWord = id => {
    setWords(prevState => {
      return prevState.filter(word => word.id !== id);
    });
  };

  // редагування слова
  const editWord = updatedWord => {
    setWords(prevState => {
      return prevState.map(word => {
        if (word.id === updatedWord.id) {
          return updatedWord;
        }
        return word;
      });
    });
  };

  // відфільтровані слова для layout
  const filteredWords = handleFilterWords();

  return (
    <div>
      <Navigation />
      <WordsForm addWord={addWord} />
      <Filter handleChange={filterWord} value={filter} />
      <WordList
        deleteWord={deleteWord}
        words={filteredWords}
        editWord={editWord}
      />
    </div>
  );
};

export default App;
