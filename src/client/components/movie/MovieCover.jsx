import React from 'react'

export default class MovieCover extends React.Component {
	render() {
		return (
			<section className="movie-details-section flex">
				<div className="cover-box">
					<img src="./static/images/g.jpg" />
				</div>
				<div className="movie-details">
					<h2>Pulp Fiction</h2>
					<p className="type">Oscar-winning Movies</p>
					<div className="time-info flex">
						<p className="release-time">1994</p>
						<p className="duration">154min</p>
					</div>
					<p className="description">description description description description description description description description description description description description description description description description description description description description description description description </p>
				</div>
			</section>
		)
	}
}