import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';

export default class WordsForm extends Component {
	state = {
		uaWord: '',
		enWord: ''
	}

	handleChange = (e) => {
		// console.log(e)
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	onSubmitForm = (e) => {
		e.preventDefault()
		const word = {
			id: nanoid(5),
			isChecked: false,
			...this.state,
		}
		this.props.addWord(word)
		this.setState({
			uaWord: '',
			enWord: ''
		})
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmitForm}  action="">
				<TextField onChange={this.handleChange}
					value={this.state.uaWord}
				name='uaWord' id="filled-basic" label="UKR" variant="filled" />
				<TextField onChange={this.handleChange} 
				value={this.state.enWord}
				name='enWord' id="filled-basic" label="ENG" variant="filled" />
				<button type="submit">Add word</button>
			</form>
		)
	}
}
