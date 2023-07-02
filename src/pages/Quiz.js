import { Button } from '@mui/material';
import QuizComponent from 'components/Quiz/QuizComponent';
import React, { useState } from 'react';

export const Quiz = () => {

  const [render, setRender] = useState(false);

  const onButtonClick = () => {
    setRender(prev => !prev);
  }

  return <>
    
    <Button onClick={onButtonClick} variant="contained">Quiz</Button>

    {render && <QuizComponent />}
  </>
};
