import React, { useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import MovieApi from '../../api/api';
// import { fetchMoviesSuccess } from '../../store/movies/actions';
import Preloader from '../UIComponents/Preloader';
import {useActions} from '../../hooks/useActions'

import MovieList from './MovieList';

const Movies = ({filters, page}) => {
    const { fetchMovies } = useActions()
    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
      // const queryStringParams = {
      //   page: page,
      //   language: "ru-RU",
      //   sort_by: filters.sort_by,
      //   primary_release_year: filters.primary_release_year,
      // }
      // if(filters.genres.length > 0) {
      //   queryStringParams.with_genres = filters.genres.join(',')
      // }

      //   MovieApi.get("/discover/movie", { params: queryStringParams }).then((data) => {
      //   fetchMoviesSuccess(data.results)

      //   //setTotalPages
      //   //onChangePagination
      //   //setPage
      // })

      fetchMovies(filters, page)
    }, [filters, page]);



    if(movies.length === 0) {
      return <Preloader />
    }

    return (
        <MovieList
            movies={movies}
            filters={filters}
            page ={page}
        />
    )
}

export default Movies