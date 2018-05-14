import API from 'API'
import { 
	SEARCH_MOVIE,
	SET_SEARCH_MOVIE_TEXT,
	SET_SEARCH_MOVIE_TYPE,
	SET_SEARCH_MOVIE_SORT 
} from 'ActionTypes'

export const searchMovie = text => {
	const movies = text !== '' ? [
		{title: 'MV1'},
		{title: 'MV2'},
		{title: 'MV3'},
		{title: 'MV4'}
	] : []

	const reqParams = {
		url: 'movies'
	}

	API.request(reqParams).then(doc => {
		console.log('API doc', doc)
	}).catch(e => {
		console.log('API error', e)
	})

	return { type: SEARCH_MOVIE, movies }
}

export const setSearchText = searchText => {
	return { type: SET_SEARCH_MOVIE_TEXT, searchText }
}

export const setSearchType = searchType => {
	return { type: SET_SEARCH_MOVIE_TYPE, searchType }
}

export const setSearchSort = searchSort => {
	console.log('===========', searchSort)
	return { type: SET_SEARCH_MOVIE_SORT, searchSort }
}

// export const searchMovie = text => (dispatch, getState) => {
// 	console.log(text)
// 	console.log('types.SEARCH_MOVIE', SEARCH_MOVIE)	
// 	dispatch({ type: SEARCH_MOVIE, text })
// }