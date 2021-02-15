import React, { useState, useEffect} from 'react'
import MovieApi from '../../api/api';

import MovieList from './MovieList';

const Movies = ({filters, page}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const queryStringParams = {
        page: page,
        language: "ru-RU",
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