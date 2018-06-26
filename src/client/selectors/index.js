import { createSelector } from 'reselect'

const getMovies= (state) => state.movie.list

export const getMovieCount = createSelector(
    [getMovies],
    (movies) => {
        return movies.length
    }
)