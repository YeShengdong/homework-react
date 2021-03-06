import React from 'react'
import {
	setSearchText
} from 'actions'
import movie from '../movie'

describe('Reducers Movie ', () => {
	it('should set text condition', () => {
		const searchText = 'test'
		const action = setSearchText(searchText)
		const newState = movie(undefined, action)

		expect(newState).toMatchObject({ conditions: { text: searchText } })
	})
})
