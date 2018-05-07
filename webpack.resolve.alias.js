'use strict'

const path = require('path')
const rootDir = __dirname
const clientDir = path.join(rootDir, 'src/client')
const pageDir = clientDir + '/pages/'
const componentDir = clientDir + '/components/'

module.exports = {
	/*
	 * Pages
	 */
	App: clientDir + '/App',
	ErrorBoundary: pageDir + 'ErrorBoundary',
	MovieListPage: pageDir + 'movie/MovieListPage',
	MovieDetailPage: pageDir + 'movie/MovieDetailPage',

	/*
	 * Components
	 */
	Header: componentDir + 'common/Header',
	Footer: componentDir + 'common/Footer',
	Radio: componentDir + 'form/Radio',
	MovieSearch: componentDir + 'movie/MovieSearch',
	MovieCover: componentDir + 'movie/MovieCover',
	MovieList: componentDir + 'movie/MovieList'
}