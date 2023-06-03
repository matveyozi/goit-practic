import React from 'react';
// import Checkbox from '@mui/material/Checkbox';

import WordListItem from './WordListItem';

export default function WordList({ words, deleteWord, editWord }) {
  return (
    <ul>
      {words.map((item, index) => {
        return (
          <WordListItem
            key={item.id}
            index={index}
            item={item}
            deleteWord={deleteWord}
            editWord={editWord}
          />
        );
      })}
    </ul>
  );
}
