import React from 'react';

import Checkbox from '@mui/material/Checkbox';

const WordListItem = ({ index, item, deleteWord, editWord }) => {
  return (
    <div>
      <li>
        <Checkbox />
        <p className="numberWord">{index + 1}</p>
        <p className="ukrWord">{item.uaWord}</p>
        <p className="enWord">{item.enWord}</p>
        <button onClick={() => deleteWord(item.id)}>DELETE</button>
        <button>EDIT</button>
      </li>
    </div>
  );
};

export default WordListItem;
