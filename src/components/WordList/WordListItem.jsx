import React from 'react';

import Checkbox from '@mui/material/Checkbox';

import { useState } from 'react';
import { TextField } from '@mui/material';

const WordListItem = ({ index, item, deleteWord, editWord }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [uaWord, setUaWord] = useState(item.uaWord);
  const [enWord, setEnWord] = useState(item.enWord);

  const handleChange = e => {
    switch (e.target.name) {
      case 'uaWord':
        setUaWord(e.target.value);
        return;
      case 'enWord':
        setEnWord(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleEdit = e => {
    setIsEdit(prevState => !prevState);
    if (isEdit) {
      editWord({ ...item, uaWord, enWord });
    }
  };

  return (
    <div>
      <li>
        <Checkbox />
        <p className="numberWord">{index + 1}</p>
        {isEdit ? (
          <TextField value={uaWord} name="uaWord" onChange={handleChange} />
        ) : (
          <p className="ukrWord">{item.uaWord} </p>
        )}
        {isEdit ? (
          <TextField value={enWord} name="enWord" onChange={handleChange} />
        ) : (
          <p className="enWord">{item.enWord}</p>
        )}

        <button onClick={() => deleteWord(item.id)}>DELETE</button>
        <button onClick={handleEdit}>{isEdit ? 'SAVE' : 'EDIT'}</button>
      </li>
    </div>
  );
};

export default WordListItem;
