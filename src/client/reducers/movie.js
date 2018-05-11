import {
	SEARCH_MOVIE,
	SET_SEARCH_MOVIE_TEXT,
	SET_SEARCH_MOVIE_TYPE,
	SET_SEARCH_MOVIE_SORT
} from 'ActionTypes'

const initialState = {
	list: [],
	count: 0,
	conditions: {
		text: '',
		type: '',
		sort: ''
	},
	searchTypes: [
		{
			name: 'TITLE',
			value: 'title'
		},
		{
			name: 'GENRE',
			value: 'genres'
		}
	],
	sortTypes: [
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
	console.log('CASE', action.type)
	console.log('ACTION', action)
	console.log('STATE', state)

	switch (action.type) {
		case SEARCH_MOVIE:
			const list = action.movies

			return Object.assign({}, state, {
				list: list,
				count: list.length
			})
		case SET_SEARCH_MOVIE_TEXT:
			return objAssignConditions(state, { text: action.searchText })
		case SET_SEARCH_MOVIE_TYPE:
			return objAssignConditions(state, { type: action.searchType })
		case SET_SEARCH_MOVIE_SORT:
			return objAssignConditions(state, { sort: action.searchSort })
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

