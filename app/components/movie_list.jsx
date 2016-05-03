import React, { PropTypes } from 'react'
import Movie from './movie.jsx'

const MovieList = ({ movies }) => {
    if (movies.length) {
        return (
            <ul>
                {movies.map(movie =>
                    <Movie
                        key={movie.id}
                        {...movie}
                    />
                )}
            </ul>
        )
    } else {
        return (
            <div>Fetching...</div>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList
