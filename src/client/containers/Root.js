import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary } from 'ErrorBoundary'
import MovieListPage from 'MovieListPage'
import { MovieDetailPage } from 'MovieDetailPage'

const Root = props => (
	<React.Fragment>
		<ErrorBoundary>
			<h1>List</h1>
			<MovieListPage />
			<h1>Detail Page</h1>
			<MovieDetailPage />
		</ErrorBoundary>
	</React.Fragment>
)

export default Root