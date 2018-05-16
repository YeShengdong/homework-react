import React from 'react'
import { connect } from 'react-redux'
import { 
	fetchMovies,
	setSearchText,
	setSearchBy,
	setSortBy
} from 'actions'

import Header from 'Header'
import Footer from 'Footer'
import MovieSearch from 'MovieSearch'
import MovieList from 'MovieList'

class MovieListPage extends React.Component {
	render() {
		const props = this.props

		return (
			<React.Fragment>
				<Header />
				<MovieSearch 
					onSearch={props.fetchMovies} 
					setSearchText={props.setSearchText}
					setSearchBy={props.setSearchBy} 
					setSortBy={props.setSortBy}
					conditions={props.conditions}
					searchBys={props.searchBys}
					sortBys={props.sortBys}
					count={props.count}
				/>
				<MovieList movies={props.list} />
				<Footer />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	const obj = state.movie

	return {
		list: obj.list,
		conditions: obj.conditions,
		searchBys: obj.searchBys,
		sortBys: obj.sortBys,
		count: obj.count
	}
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(
	mapStateToProps, 
	{ 
		fetchMovies,
		setSearchText,
		setSearchBy,
		setSortBy
	}
)(MovieListPage)