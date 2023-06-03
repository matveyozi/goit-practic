// import React, { Component } from 'react'

import { useState } from 'react';

// компоненти
import WordList from '../components/WordList/WordList';
import WordsForm from '../components/WordsForm/WordsForm';
import Filter from '../components/Filter/Filter';

// import { useLocalStorage } from 'hooks/useLocalStorage';

const Home = ({ words, setWords }) => {
  //   const [words, setWords] = useLocalStorage('words', []);
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

  // редагування checkbox
  const editWordCheckbox = id => {
    setWords(prevState => {
      return prevState.map(word => {
        if (word.id === id) {
          return { ...word, isChecked: !word.isChecked };
        }
        return word;
      });
    });
  };

  // відфільтровані слова для layout
  const filteredWords = handleFilterWords();

  return (
    <div>
      <WordsForm addWord={addWord} />
      <Filter handleChange={filterWord} value={filter} />
      <WordList
        deleteWord={deleteWord}
        words={filteredWords}
        editWord={editWord}
        editWordCheckbox={editWordCheckbox}
      />
    </div>
  );
};

export default Home;
