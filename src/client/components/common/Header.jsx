import React from 'react'
import classNames from 'classnames'

export default function Header(props) {
	return (
		<React.Fragment>
			<header>
				<p>netflixroulette</p>
				{props.showSearchLink && 
					<a href="#" className="search-btn">SEARCH</a>
				}
			</header>
		</React.Fragment>
	)
}
