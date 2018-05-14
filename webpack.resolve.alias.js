'use strict'

const path = require('path')
const rootDir = __dirname
const clientDir = path.join(rootDir, 'src/client')
const libDir = clientDir + '/lib/'
const pageDir = clientDir + '/pages/'
const containerDir = clientDir + '/containers/'
const componentDir = clientDir + '/components/'

module.exports = {
	/*
	 * Config
	 */
	Config: clientDir + '/config',

	/*
	 *	Libraries
	 */
	API: libDir + 'API.class',

	/*
	 * Actions
	 */
	ActionTypes: clientDir + '/constants/ActionTypes',
	actions: clientDir + '/actions',

	/*
	 * Containers
	 */
	
	MovieListPage: containerDir + 'movie/MovieListPage',
	MovieDetailPage: containerDir + 'movie/MovieDetailPage',

	/*
	 * Components
	 */
	ErrorBoundary: componentDir + 'ErrorBoundary',
	Header: componentDir + 'common/Header',
	Footer: componentDir + 'common/Footer',
	Radio: componentDir + 'form/Radio',
	MovieSearch: componentDir + 'movie/MovieSearch',
	MovieCover: componentDir + 'movie/MovieCover',
	MovieList: componentDir + 'movie/MovieList'
}