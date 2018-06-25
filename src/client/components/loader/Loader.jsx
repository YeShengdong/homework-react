import React from 'react'
import { LoaderLayer, LoaderText } from './LoaderStyled'

const Loader = ({ loading }) => (
	loading && <LoaderLayer><LoaderText>Loading...</LoaderText></LoaderLayer>
)

Loader.defaultProps = {
	loading: true
}

export default Loader
