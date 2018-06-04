import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from 'reducers'
import configureStore from 'store'
import { PersistGate } from 'redux-persist/integration/react'

import ErrorBoundary from 'ErrorBoundary'
import MovieListPage from 'MovieListPage'
import MovieDetailPage from 'MovieDetailPage'

// const store = createStore(
// 	rootReducer, 
// 	applyMiddleware(thunkMiddleware)
// )

const cStore = configureStore()
const Root = props => (
	<Provider store={cStore.store}>
		<PersistGate loading={null} persistor={cStore.persistor}>
			<ErrorBoundary>
				{props.children}
			</ErrorBoundary>
		</PersistGate>
	</Provider>
)

export default Root