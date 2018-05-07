import React from 'react'
import Header from 'Header'
import Footer from 'Footer'

import { MovieSearch } from 'MovieSearch'
import { MovieList } from 'MovieList'

export class MovieListPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			movies: []
		}

		this.getMovies = this.getMovies.bind(this)
	}

	getMovies(type, text) {
		const movies = text !== '' ? [
			{title: 'MV1'},
			{title: 'MV2'},
			{title: 'MV3'},
			{title: 'MV4'}
		] : []

		this.setState({movies: movies})
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<MovieSearch onSearch={this.getMovies} />
				<MovieList listData={this.state.movies} emptyMsg="No films found" />
				<Footer />
			</React.Fragment>
		)
	}
}