import React, { Component } from 'react'
import Navigation from './Navigation/Navigation';
import WordList from './WordList/WordList';
import WordsForm from './WordsForm/WordsForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    words: [
      { id: 1, uaWord: 'привіт', enWord: 'hello', isChecked: false },
      { id: 2, uaWord: 'пока', enWord: 'byby', isChecked: false }
    ],
    filter: ''
  };

  filterWord = (e) => {
    this.setState( {
      filter: e.target.value,
    })
  }

  handleFilterWords = () => {
    return this.state.words.filter(word => word.uaWord.toLowerCase()
    .includes(this.state.filter.toLowerCase().trim()) || word.enWord.toLowerCase()
    .includes(this.state.filter.toLowerCase().trim()));
  }

  addWord = (word) => {
    this.setState(prevState => {
      return {
        words:[...prevState.words, word]
      }
    })
  }

  deleteWord = (id) => {
    this.setState(prevState => {
      return {
        words: prevState.words.filter(word => word.id !== id)
      }
    })
  }

  render() {
    const filteredWords = this.handleFilterWords()
    return (
      <div>
        <Navigation />
        <WordsForm addWord={this.addWord} />
        <Filter handleChange={this.filterWord} value={this.state.filter}/>
        <WordList deleteWord={this.deleteWord} words={filteredWords} />

      </div>
    )
  }
}
