import React from 'react'

const msg = 'Hello World'

const C1 = React.createElement(
	'h1',
	null,
	msg
)

class C2 extends React.Component {
	render() {
		return <h2>{msg}</h2>
	}
}

class C3 extends React.PureComponent {
	render() {
		return <h3>{msg}</h3>
	}
}

function C4(props) {
	return <h4>{msg}</h4>
}

export { C1, C2, C3, C4 }
