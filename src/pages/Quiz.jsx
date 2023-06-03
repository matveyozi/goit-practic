import React, { useState } from 'react';

const Quiz = ({ words }) => {
  const [quizWords, setQuizWords] = useState(
    words.filter(word => word.isChecked)
  );

  console.log('words', words);
  console.log('quizWords', quizWords);

  return <div>Quiz</div>;
};

export default Quiz;
