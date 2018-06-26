'use strict'

const path = require('path')
const rootDir = __dirname
const clientDir = path.join(rootDir, 'src/client')
const libDir = clientDir + '/lib/'
const containerDir = clientDir + '/containers/'
const componentDir = clientDir + '/components/'
const publicDir = clientDir + '/public/'

module.exports = {
	/*
	 * Config
	 */
	Config: clientDir + '/config',

	/*
	 * Libraries
	 */
	API: libDir + 'API.class',

	/*
	 * Actions
	 */
	ActionTypes: clientDir + '/constants/ActionTypes',
	actions: clientDir + '/actions',

	/*
	 * Selectors
	 */
	selectors: clientDir + '/selectors',

	/*
	 * Reducers
	 */
	reducers: clientDir + '/reducers',

	/*
	 * Store
	 */
	store: clientDir + '/store',

	/*
	 * Containers
	 */
	Root: containerDir + 'Root',
	MovieListPage: containerDir + 'movie/MovieListPage',
	MovieDetailPage: containerDir + 'movie/MovieDetailPage',
	NotFound: containerDir + 'NotFound',

	/*
	 * Components
	 */
	Loader: componentDir + 'loader/Loader',
	ErrorBoundary: componentDir + 'ErrorBoundary',
	Header: componentDir + 'common/Header',
	Footer: componentDir + 'common/Footer',
	Radio: componentDir + 'form/Radio',
	MovieSearch: componentDir + 'movie/MovieSearch',
	MovieCover: componentDir + 'movie/MovieCover',
	MovieList: componentDir + 'movie/MovieList',

	/*
	 * Public
	 */
	commonStyled: publicDir + 'styles/commonStyled'
}