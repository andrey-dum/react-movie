import React, { useState, useEffect} from 'react'
import MovieApi from '../../api/api';
// import { API_KEY_3, API_URL } from '../../api/api';

import MovieList from './MovieList';

const Movies = ({filters, page}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    //   const genres = filters.genres.length > 0 ? filters.genres.join(',') : ''
    //   const url = `${API_URL}/discover/movie?api_key=${API_KEY_3}&page=${page}&language=ru-Ru&sort_by=${filters.sort_by}&primary_release_year=${filters.primary_release_year}&with_genres=${genres}`
    //   fetch(url).then(res => res.json()).then(data => setMovies(data.results))

      const queryStringParams = {
        page: page,
        languqge: "ru-Ru",
        sort_by: filters.sort_by,
        primary_release_year: filters.primary_release_year,
      }
      if(filters.genres.length > 0) {
        queryStringParams.with_genres = filters.genres.join(',')
      }

        MovieApi.get("/discover/movie", { params: queryStringParams }).then((data) => {
        setMovies(data.results)
        //setTotalPages
        //onChangePagination
        //setPage
      })
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