import React from 'react'

function MovieList(props) {
	const movies = props.movies || []
	// let movieListItems = []

	// for (let key in movies) {
	// 	movieListItems.push(<MovieListItem key={key} item={movies[key]} />)
	// }

	const movieListItems = movies.map((item, index) => {
		return <MovieListItem key={index} item={item} />
	})

	return (
			<div className="movie-list">
				{props.showTopBar && 
					<div className="top-bar">
						Fimls by Drama genre
					</div>
				}
		      	{Object.keys(movies).length ? (
					<ul className="flex">
						{movieListItems}
					</ul>
				) : (
					<p className="emptyMsg">No films found</p>
				)}
			</div>
		)
}

function MovieListItem(props) {
	const movie = props.item
	const date = movie.release_date.split('-')[0]
	const genres = movie.genres.join(' ')

	return (
		<React.Fragment>
			<li>
				<div className="image-box flex">
					<img src={movie.poster_path} />
				</div>
				<h3>{movie.title}<span className="date">{date}</span></h3>
				<p className="genres">{genres}</p>
			</li>
		</React.Fragment>
	)
}

export default MovieList
