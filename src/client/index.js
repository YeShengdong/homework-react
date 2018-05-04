import ReactDOM from 'react-dom'
import React from 'react'

import { C1, C2, C3, C4 } from './components/task-1' 
import './main.css'

const App = props => (
	<React.Fragment>
		{C1}
		<C2 />
		<C3 />
		<C4 />
	</React.Fragment>
)

ReactDOM.render(
	<App />,
	document.getElementById('root')
)