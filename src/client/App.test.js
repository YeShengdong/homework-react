import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import App from 'App'

describe('<App />', () => {
	it('renders <MovieListPage /> component', () => {
		// const wrapper = shallow(<App />)

		// expect(wrapper.find('MovieListPage')).to.have.length(3)
		// const tree = renderer
		// 	.create(<App />)
		// 	.toJSON()
		// expect(tree).toMatchSnapshot()
	})

	// it('renders <MovieDetailPage /> component', () => {
	// 	const wrapper = shallow(<App />)
		
	// 	expect(wrapper.find('.movie-details-section').length).to.equal(1)
	// })
})

test('null', () => {
	const n = 3

	expect(n).toBe(3)
})