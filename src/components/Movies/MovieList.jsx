import React from 'react'
import MovieItem from './MovieItem'
import {Link} from 'react-router-dom'

const MovieList = ({movies}) => {
    return (
        <div className="row">
            {movies.map(movie => (
                <div key={movie.id} className="col-6 mb-4">
                    <Link to={`/movie/${movie.id}`}>
                        <MovieItem movie={movie} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MovieList