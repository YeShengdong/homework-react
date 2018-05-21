import React from 'react'
import { connect } from 'react-redux'
import { 
	fetchMovie
} from 'actions'

import Header from 'Header'
import Footer from 'Footer'
import MovieCover from 'MovieCover'
import MovieList from 'MovieList'

class MovieDetailPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const props = this.props

		return (
			<React.Fragment>
				<Header showSearchLink={true} />
				<MovieCover movie={props.movie} />
				<MovieList movies={props.list} showTopBar={true} />
				<Footer />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	const movie = state.movie

	return {
		list: movie.relateList,
		movie: movie.detail
	}
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(
	mapStateToProps,
	{ 
		fetchMovie
	}
)(MovieDetailPage)
