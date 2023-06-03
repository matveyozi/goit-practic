import { useReducer } from 'react';

import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';

// початковий стан інпутів
const initialState = {
  uaWord: '',
  enWord: '',
};

// оновлювач стейту
const reducer = (state, action) => {
  switch (action.type) {
    case 'uaWord':
      return { ...state, uaWord: action.payload };
    case 'enWord':
      return { ...state, enWord: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
// головний компонент  форми
const WordsForm = ({ addWord }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // контрольований інпут (функція)
  const handleChange = e => {
    console.log(e);
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  // сабміт форми
  const onSubmitForm = e => {
    e.preventDefault();
    const word = {
      id: nanoid(5),
      isChecked: false,
      ...state,
    };
    addWord(word);
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={onSubmitForm} action="">
      <TextField
        onChange={handleChange}
        value={state.uaWord}
        name="uaWord"
        id="filled-basic"
        label="UKR"
        variant="filled"
      />
      <TextField
        onChange={handleChange}
        value={state.enWord}
        name="enWord"
        id="filled-basic"
        label="ENG"
        variant="filled"
      />
      <button type="submit">Add word</button>
    </form>
  );
};

export default WordsForm;

// export default class WordsForm extends Component {
// 	state = {
// 		uaWord: '',
// 		enWord: ''
// 	}

// 	handleChange = (e) => {
// 		console.log(e)
// 		this.setState({
// 			[e.target.name]:e.target.value
// 		})
// 	}
// 	onSubmitForm = (e) => {
// 		e.preventDefault()
// 		const word = {
// 			id: nanoid(5),
// 			isChecked: false,
// 			...this.state,
// 		}
// 		this.props.addWord(word)
// 		this.setState({
// 			uaWord: '',
// 			enWord: ''
// 		})
// 	}

// 	render() {
// 		return (
// 			// <form onSubmit={this.onSubmitForm}  action="">
// 			// 	<TextField onChange={this.handleChange}
// 			// 		value={this.state.uaWord}
// 			// 	name='uaWord' id="filled-basic" label="UKR" variant="filled" />
// 			// 	<TextField onChange={this.handleChange}
// 			// 	value={this.state.enWord}
// 			// 	name='enWord' id="filled-basic" label="ENG" variant="filled" />
// 			// 	<button type="submit">Add word</button>
// 			// </form>
// 		)
// 	}
// }
