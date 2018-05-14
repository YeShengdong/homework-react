import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import rootReducer from 'reducers'
import { Provider } from 'react-redux'

import ErrorBoundary from 'ErrorBoundary'
import MovieListPage from 'MovieListPage'
import MovieDetailPage from 'MovieDetailPage'

const store = createStore(rootReducer)
const Root = props => (
	<Provider store={store}>
		<React.Fragment>
			<ErrorBoundary>
				<h1>List</h1>
				<MovieListPage />
				<h1>Detail Page</h1>
				<MovieDetailPage />
			</ErrorBoundary>
		</React.Fragment>
	</Provider>
)

export default Root