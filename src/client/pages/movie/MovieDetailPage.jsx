import React from 'react'
import { MovieCover } from 'MovieCover'
import { MovieList } from 'MovieList'
import { Header } from 'Header'
import { Footer } from 'Footer'

export class MovieDetailPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			movies:  [
				{title: 'MV1'},
				{title: 'MV2'},
				{title: 'MV3'},
				{title: 'MV4'}
			]
		}
	}

	render() {
		return (
			<React.Fragment>
				<Header showSearchLink={true} />
				<MovieCover />
				<MovieList listData={this.state.movies} emptyMsg="No films found" showTopBar={true} />
				<Footer />
			</React.Fragment>
		)
	}
}