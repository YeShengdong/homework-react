import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, fetchRelateMovies } from 'actions'
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
		this.props.fetchMovie(this.props.movieId).then((res) => {
			this.props.fetchRelateMovies()
		})
	}

    componentWillReceiveProps(nextProps) {
    	const id = nextProps.movieId

    	if (id !== this.props.movieId) {
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

const mapStateToProps = (state, props) => {
	const movie = state.movie
	console.log(props)
	return {
		list: movie.relateList,
		movie: movie.detail,
		loading: movie.loading,
		movieId: props.match.params.id
	}
}

export default connect(
	mapStateToProps,
	{ 
		fetchMovie,
		fetchRelateMovies
	}
)(MovieDetailPage)
