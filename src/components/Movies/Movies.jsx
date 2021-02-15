import React, { useState, useEffect} from 'react'
import { API_KEY_3, API_URL } from '../../api/api';
import MovieList from './MovieList';

const Movies = ({filters, page}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const genres = filters.genres.length > 0 ? filters.genres.join(',') : ''
      const url = `${API_URL}/discover/movie?api_key=${API_KEY_3}&page=${page}&language=ru-Ru&sort_by=${filters.sort_by}&primary_release_year=${filters.primary_release_year}&with_genres=${genres}`
      fetch(url).then(res => res.json()).then(data => setMovies(data.results))
    }, [filters, page]);

    return (
        <MovieList
            movies={movies}
            filters={filters}
            page ={page}
        />
    )
}

export default Movies