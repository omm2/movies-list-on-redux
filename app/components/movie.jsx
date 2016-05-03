import React, { PropTypes } from 'react'

const Movie = ({ title, poster_path }) => {
    const src = `https://image.tmdb.org/t/p/w370${poster_path}`
    return (
        <li>
            <img class="poster"
                src={src}
            />
        </li>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired
}

export default Movie
