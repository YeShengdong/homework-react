import React from 'react'
import ReactDOM from 'react-dom'

import { ErrorBoundary } from 'ErrorBoundary'
import { MovieListPage } from 'MovieListPage'
import { MovieDetailPage } from 'MovieDetailPage'

const App = props => (
	<React.Fragment>
		<ErrorBoundary>
			<h1>List Page</h1>
			<MovieListPage />
			<h1>Detail Page</h1>
			<MovieDetailPage />
		</ErrorBoundary>
	</React.Fragment>
)

export default App
