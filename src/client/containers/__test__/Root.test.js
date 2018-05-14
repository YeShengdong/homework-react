import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import Root from 'Root'

describe('<Root />', () => {
	it('renders without crashing', () => {
		const tree = renderer
			.create(<Root />)
			.toJSON()

		expect(tree).toMatchSnapshot()
	})
})
