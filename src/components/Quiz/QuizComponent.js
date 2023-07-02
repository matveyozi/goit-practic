import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button';
import React, { useMemo, /* useRef, */ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedWords } from 'redux/selectors';
import shuffle from 'lodash.shuffle';
import { checkWord } from 'redux/operations';
import { Link } from 'react-router-dom';


const QuizComponent = () => {
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const wordsIsChecked = useSelector(selectCheckedWords);
	const dispatch = useDispatch();
	const randomWord = shuffle(wordsIsChecked)[0];

	// const ref = useRef(wordsIsChecked.length);
	// console.log(ref.current);

	// useTransition and other


	const allWordsValue = useMemo(() => wordsIsChecked.length, []);
	// console.log(allWordsValue);
	const onSubmitForm = (e) => {
		e.preventDefault();
		const inputValue = e.target.elements.query.value;

		if (inputValue === randomWord.enWord) {
			setCorrectAnswers(prev => prev + 1);
		}
		if (randomWord) dispatch(checkWord({ ...randomWord, isChecked: false }));
		e.target.reset();
	}

	// console.log(shuffle(wordsIsChecked)[0])

	// console.log(wordsIsChecked)

	if (!wordsIsChecked.length && !allWordsValue) {
		return <p>Checks some words in your vocabulary</p>
	}


	return (
		<>
			{!!wordsIsChecked.length ? (
				<>
					<p>
						{randomWord.ukrWord}
					</p>
					<p>
						{correctAnswers}/{allWordsValue}
					</p>
					<form onSubmit={onSubmitForm}>

						<TextField name='query' label="answer" />

						<Button type="submit" variant="outlined">
							next
						</Button>
					</form>
				</>
			) :
				<>
					<p>
						Your results is: {correctAnswers} / {allWordsValue}

					</p>
					<p>
						To start new quiz check words in vocabulary <Link to='/'>Home</Link>
					</p>
				</>
			}
		</>

	)
}

export default QuizComponent