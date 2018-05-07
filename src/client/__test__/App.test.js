import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import App from 'App'

describe('<App />', () => {
	it('renders without crashing', () => {
		const tree = renderer
			.create(<App />)
			.toJSON()

		expect(tree).toMatchSnapshot()
	})
})