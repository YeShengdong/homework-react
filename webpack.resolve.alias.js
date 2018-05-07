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
	MovieListPage: pageDir + 'movie/MovieListPage',
	MovieDetailPage: pageDir + 'movie/MovieDetailPage',
	ErrorBoundary: pageDir + 'ErrorBoundary',

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