import React from 'react'

const Loader = ({ loading }) => (
	loading && <div id="loader"><p className="text">Loading...</p></div>
)

Loader.defaultProps = {
	loading: true
}

export default Loader
