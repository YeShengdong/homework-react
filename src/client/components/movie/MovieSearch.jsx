import React from 'react'
import { LabelRadio } from 'Radio'

export default class MovieSearch extends React.Component {
	constructor(props) {
		super(props)

		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this)
		this.handleSortTypeChange = this.handleSortTypeChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleTextChange(event) {
		this.props.setSearchText(event.target.value)
	}

	handleSearchTypeChange(event) {
		this.props.setSearchType(event.target.value)
	}

	handleSortTypeChange(event) {
		this.props.setSearchSort(event.target.value)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.onSearch()
	}

	render() {
		const props = this.props
		const conditions = props.conditions
		const searchTypeRadios = props.searchTypes.map((item, index) => {
			const name = 'searchType'
			const id = `${name}-${index}`
			const defaultChecked = conditions.type === item.value

			return <LabelRadio 
						key={index} 
						name={name}
						id={id} 
						labelName={item.name} 
						value={item.value} 
						defaultChecked={defaultChecked} 
						onChange={this.handleSearchTypeChange} />
		})

		const sortTypeRadios = props.sortTypes.map((item, index) => {
			const name = 'sortType'
			const id = `${name}-${index}`
			const defaultChecked = conditions.sort === item.value

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
					<input type="text" className="search-field" value={conditions.text} onChange={this.handleTextChange} />
					<div className="search-by-box">
						<span className="text">SEARCH BY</span>
						{searchTypeRadios}
						<input type="submit" value="SEARCH" className="search-btn" />
					</div>
				</div>
				<div className="bottom-bar flex">
					<div className="res-count">{props.count} movies found</div>
					<div className="res-sort">
						<span className="text">Sort by</span>
						{sortTypeRadios}
					</div>
				</div>
			</form>
		)
	}
}