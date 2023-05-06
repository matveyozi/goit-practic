import React, { Component } from 'react'
import Navigation from './Navigation/Navigation';
import WordList from './WordList/WordList';
import WordsForm from './WordsForm/WordsForm';

export class App extends Component {
  state = {
    words: [
      { id: 1, uaWord: 'привіт', enWord: 'hello', isChecked: false },
      { id: 2, uaWord: 'пока', enWord: 'byby', isChecked: false }
    ],
    filter: ''
  };

  addWord = (word) => {
    this.setState(prevState => {
      return {
        words:[...prevState.words, word]
      }
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <WordsForm addWord={this.addWord} />
        <WordList words={this.state.words} />

      </div>
    )
  }
}
