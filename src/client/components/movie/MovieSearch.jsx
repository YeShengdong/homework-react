import React from 'react'
import { LabelRadio } from 'Radio'

export class MovieSearch extends React.Component {
	constructor(props) {
		super(props)

		this.searchTypes = [
			{
				name: 'TITLE',
				value: '1'
			},
			{
				name: 'GENRE',
				value: '2'
			}
		]

		this.sortTypes = [
			{
				name: 'release date',
				value: '1'
			},
			{
				name: 'rating',
				value: '2'
			}
		]

		this.state = {
			type: this.searchTypes[0].value,
			sort: this.sortTypes[0].value,
			value: '',
			count: 0
		}

		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this)
		this.handleSortTypeChange = this.handleSortTypeChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleTextChange(event) {
		this.setState({value: event.target.value})
	}

	handleSearchTypeChange(event) {
		this.setState({type: event.target.value})
	}

	handleSortTypeChange(event) {
		this.setState({sort: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.onSearch(this.state.type, this.state.value)
	}

	render() {
		const searchTypeRadios = this.searchTypes.map((item, index) => {
			const name = 'searchType'
			const id = `${name}-${index}`
			const defaultChecked = this.state.type === item.value

			return <LabelRadio 
						key={index} 
						name={name}
						id={id} 
						labelName={item.name} 
						value={item.value} 
						defaultChecked={defaultChecked} 
						onChange={this.handleSearchTypeChange} />
		})

		const sortTypeRadios = this.sortTypes.map((item, index) => {
			const name = 'sortType'
			const id = `${name}-${index}`
			const defaultChecked = this.state.sort === item.value

			return <LabelRadio 
						key={index} 
						name={name}
						id={id} 
						labelName={item.name} 
						value={item.value} 
						defaultChecked={defaultChecked} 
						onChange={this.handleSortTypeChange} />
		})

		return (
			<form id="search-section" onSubmit={this.handleSubmit}>
				<div className="main-content">
					<h2>FIND YOUR MOVIE</h2>
					<input type="text" className="search-field" value={this.state.value} onChange={this.handleTextChange} />
					<div className="search-by-box">
						<span className="text">SEARCH BY</span>
						{searchTypeRadios}
						<input type="submit" value="SEARCH" className="search-btn" />
					</div>
				</div>
				<div className="bottom-bar flex">
					<div className="res-count">{this.state.count} movies found</div>
					<div className="res-sort">
						<span className="text">Sort by</span>
						{sortTypeRadios}
					</div>
				</div>
			</form>
		)
	}
}