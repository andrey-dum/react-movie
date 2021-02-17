import MovieApi from "../../api/api"
import * as movieTypes from "./actionTypes"

export const fetchMoviesStart = () => {
    return {
        type: movieTypes.FETCH_MOVIES_START
    }
}


export const fetchMoviesSuccess = (movies) => {
    return {
        type: movieTypes.FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}


export const fetchMoviesError = (error) => {
    return {
        type: movieTypes.FETCH_MOVIES_SUCCESS,
        payload: error
    }
}

export const fetchMovies = (filters, page) => {
    return async dispatch => {
        try {
            dispatch(fetchMoviesStart())

            const params = {
                page: page,
                language: "ru-RU",
                sort_by: filters.sort_by,
                primary_release_year: filters.primary_release_year,
            }

            if(filters.genres.length > 0) {
                params.with_genres = filters.genres.join(',')
            }

            const data = await MovieApi.get(`/discover/movie`, {
                params
            })

            dispatch(fetchMoviesSuccess(data.results))

        } catch (error) {
            dispatch(fetchMoviesError('Ошибка при получении фильмов!'))
        }
    }
}

export const fetchGenres = () => {
    return async dispatch => {
        try {
            // const url = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`
            // fetch(url).then(res => res.json()).then(data => setGenres(data.genres))

            const data = await MovieApi.get(`/genre/movie/list`, {
                params: {
                    language: "ru-RU",
                }
            })

      

            dispatch({type: movieTypes.FETCH_GENRES, payload: data.genres})
            
            

        } catch (error) {
            console.log('Ошибка при получении жанров!');
        }
    }
}


export const upadateFavoriteMovies = (movies) => ({type: movieTypes.UPDATE_FAV_MOVIES, payload: movies})

export const fetchFavMovies = ({user, session_id}) => {
    return async dispatch => {
        const favMovies = await MovieApi.get(`/account/${user.id}/favorite/movies`, {
            params: {
                session_id: session_id
            }
        })

        dispatch(upadateFavoriteMovies(favMovies.results))
    }
}



export const changeFilters = (payload) => {
    return {
        type: movieTypes.CHANGE_FILTERS,
        payload
    }
}
export const changePage = (payload) => {
    return {
        type: movieTypes.ON_CHANGE_PAGE,
        payload
    }
}