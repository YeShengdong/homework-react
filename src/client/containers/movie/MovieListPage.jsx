import React from 'react'
import { connect } from 'react-redux'
import { 
	searchMovie,
	setSearchText,
	setSearchType,
	setSearchSort
} from 'actions'

import Header from 'Header'
import Footer from 'Footer'
import MovieSearch from 'MovieSearch'
import MovieList from 'MovieList'

class MovieListPage extends React.Component {
	constructor(props) {
		super(props)

		this.getMovies = this.getMovies.bind(this)
	}

	getMovies() {
		console.log('this.props', this.props)

		this.props.searchMovie(this.props.conditions.text)
	}

	render() {
		const props = this.props

		return (
			<React.Fragment>
				<Header />
				<MovieSearch 
					onSearch={this.getMovies} 
					setSearchText={props.setSearchText}
					setSearchType={props.setSearchType} 
					setSearchSort={props.setSearchSort}
					conditions={props.conditions}
					searchTypes={props.searchTypes}
					sortTypes={props.sortTypes}
					count={props.count}
				/>
				<MovieList listData={props.list} emptyMsg="No films found" />
				<Footer />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('mapStateToProps', state.movie)
	const obj = state.movie

	return {
		list: obj.list,
		conditions: obj.conditions,
		searchTypes: obj.searchTypes,
		sortTypes: obj.sortTypes,
		count: obj.count
	}
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(
	mapStateToProps, 
	{ 
		searchMovie,
		setSearchText,
		setSearchType,
		setSearchSort
	}
)(MovieListPage)