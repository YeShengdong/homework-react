// import { normalize, schema } from 'normalizr'
import API from 'API'
import {
	SET_SEARCH_MOVIE_TEXT,
	SET_SEARCH_MOVIE_SEARCH_BY,
	SET_SEARCH_MOVIE_SORT_BY,
	FETCH_MOVIES,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE
} from 'ActionTypes'

export const setSearchText = searchText => {
	return { type: SET_SEARCH_MOVIE_TEXT, searchText }
}

export const setSearchBy = searchBy => (dispatch, getState) => {
	dispatch({ type: SET_SEARCH_MOVIE_SEARCH_BY, searchBy })
	dispatch(fetchMovies()) 
}

export const setSortBy = sortBy => (dispatch, getState) => {
	dispatch({ type: SET_SEARCH_MOVIE_SORT_BY, sortBy })
	dispatch(fetchMovies()) 
}

export const fetchMovies = () => (dispatch, getState) => {
	dispatch({ type: FETCH_MOVIES })

	const conditions = getState().movie.conditions
	const reqParams = {
		url: 'movies',
		data: {
			sortOrder: conditions.sortOrder
		}
	}

	if (conditions.text) {
		reqParams.data.search = conditions.text

		if (conditions.searchBy) {
			reqParams.data.searchBy = conditions.searchBy
		}
	}

	if (conditions.searchBy) {
		reqParams.data.searchBy = conditions.searchBy
	}

	if (conditions.sortBy) {
		reqParams.data.sortBy = conditions.sortBy
	}

	return API
			.request(reqParams).then(res => {
				dispatch(fetchMoviesSuccess(res))
			})
			.catch(e => {
				dispatch({ type: FETCH_MOVIES_FAILURE })
			})
}

const fetchMoviesSuccess = json => {
	// const data = json.data
	// const movies = new schema.Entity('data')
	// const normalizedData = normalize(json.data, {data: [movies]})

	return {
		type: FETCH_MOVIES_SUCCESS,
		// movies: normalizedData.entities.data,
		data: json.data
	}
}
