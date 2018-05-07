import React from 'react'

function MovieList(props) {
	const list = props.listData || []

	return (
			<div className="movie-list">
				{props.showTopBar && 
					<div className="top-bar">
						Fimls by Drama genre
					</div>
				}	
		      	{list.length ? (
					<ul className="flex">
						{list.map((item, index) =>
							<MovieListItem key={index} item={item} />
						)}
					</ul>
				) : (
					<p className="emptyMsg">{props.emptyMsg}</p>
				)}
			</div>
		)
}

function MovieListItem(props) {
	return (
		<React.Fragment>
			<li>
				<div className="image-box flex">
					<img src="./static/images/g.jpg" />
				</div>
				<h3>{props.item.title}<span className="date">2018</span></h3>
				<p className="genre">genre</p>
			</li>
		</React.Fragment>
	)
}

export { MovieList }