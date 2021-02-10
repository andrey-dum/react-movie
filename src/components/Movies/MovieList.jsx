import React, { useState, useEffect} from 'react'
import { API_KEY_3, API_URL } from '../../api/api';
import MovieItem from './MovieItem'

const MovieList = ({filters, page}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const url = `${API_URL}/discover/movie?api_key=${API_KEY_3}&page=${page}&language=ru-Ru&sort_by=${filters.sort_by}`
      fetch(url).then(res => res.json()).then(data => setMovies(data.results))
    }, [filters, page]);

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