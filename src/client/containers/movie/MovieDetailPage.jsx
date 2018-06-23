import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from 'actions'
import Header from 'Header'
import Footer from 'Footer'
import MovieCover from 'MovieCover'
import MovieList from 'MovieList'
import Loader from 'Loader'

class MovieDetailPage extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id)
	}

    componentWillReceiveProps(nextProps) {
    	const id = nextProps.match.params.id

    	if (id !== this.props.match.params.id) {
    		this.props.fetchMovie(id)
    	}
    }

	render() {
		const { movie, list, loading } = this.props

		return (
			<React.Fragment>
				<Header showSearchLink={true} />
				<MovieCover movie={movie} />
				<MovieList movies={list} showTopBar={true} />
				<Footer />
				<Loader loading={loading} />
			</React.Fragment>
		)
	}
}

MovieDetailPage.defaultProps = {
	loading: false
}

const mapStateToProps = (state) => {
	const movie = state.movie

	return {
		list: movie.relateList,
		movie: movie.detail,
		loading: movie.loading
	}
}

export default connect(
	mapStateToProps,
	{ 
		fetchMovie
	}
)(MovieDetailPage)
