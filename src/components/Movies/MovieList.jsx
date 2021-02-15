import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movies}) => {
    return (
        <div className="row">
            {movies.map(movie => (
                <div key={movie.id} className="col-6 mb-4">
                    <MovieItem movie={movie} />
                </div>
            ))}
        </div>
    )
}

export default MovieList