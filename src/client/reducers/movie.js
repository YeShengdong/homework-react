import {
	SET_SEARCH_MOVIE_TEXT,
	SET_SEARCH_MOVIE_SEARCH_BY,
	SET_SEARCH_MOVIE_SORT_BY,
	FETCH_MOVIES,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE
} from 'ActionTypes'

const initialState = {
	list: [],
	count: 0,
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
	]
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
			return state
		case FETCH_MOVIES_SUCCESS:
			const list = action.data.data
			return Object.assign({}, state, {
				list: list,
				count: list.length
			})
		case FETCH_MOVIES_FAILURE:
			console.log('FETCH_MOVIES_FAILURE')
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

