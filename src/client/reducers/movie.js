import {
	SET_SEARCH_MOVIE_TEXT,
	SET_SEARCH_MOVIE_SEARCH_BY,
	SET_SEARCH_MOVIE_SORT_BY,

	FETCH_MOVIES,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE,

	FETCH_MOVIE,
	FETCH_MOVIE_SUCCESS,
	FETCH_MOVIE_FAILURE,

	FETCH_RELATE_MOVIES,
	FETCH_RELATE_MOVIES_SUCCESS,
	FETCH_RELATE_MOVIES_FAILURE
} from 'ActionTypes'

const initialState = {
	list: [],
	conditions: {
		text: '',
		searchBy: '',
		sortBy: '',
		sortOrder: 'desc'
	},
	searchBys: [
		{
			name: 'TITLE',
			value: 'title'
		},
		{
			name: 'GENRE',
			value: 'genres'
		}
	],
	sortBys: [
		{
			name: 'release date',
			value: 'release_date'
		},
		{
			name: 'rating',
			value: 'vote_average'
		}
	],
	detail: {},
	relateList: []
}

const movie = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_MOVIE_TEXT:
			return objAssignConditions(state, { text: action.searchText })
		case SET_SEARCH_MOVIE_SEARCH_BY:
			return objAssignConditions(state, { searchBy: action.searchBy })
		case SET_SEARCH_MOVIE_SORT_BY:
			return objAssignConditions(state, { sortBy: action.sortBy })
		case FETCH_MOVIES:
			console.log('FETCH_MOVIES')

			return Object.assign({}, state, { loading: true })
		case FETCH_MOVIES_SUCCESS:
			const list = action.data.data

			return Object.assign({}, state, {
				list: list,
				loading: false
			})
		case FETCH_MOVIES_FAILURE:
			console.log('FETCH_MOVIES_FAILURE')
			return state
		case FETCH_MOVIE:
			console.log('FETCH_MOVIES')
			return Object.assign({}, state, { loading: true })
		case FETCH_MOVIE_SUCCESS:
			return Object.assign({}, state, { detail: action.data, loading: false })
		case FETCH_MOVIE_FAILURE:
			console.log('FETCH_MOVIE_FAILURE')
			return state
		case FETCH_RELATE_MOVIES:
			console.log('FETCH_RELATE_MOVIES')
			return state
		case FETCH_RELATE_MOVIES_SUCCESS:
			return Object.assign({}, state, { relateList: action.data.data })
		case FETCH_RELATE_MOVIES_FAILURE:
			console.log('FETCH_RELATE_MOVIES_FAILURE')
			return state				
		default:
			return state
	}
}

const objAssignConditions = (state, obj) => {
	const newConditions = Object.assign({}, state.conditions, obj)

	return Object.assign({}, state, {
		conditions: newConditions
	})
}

export default movie

