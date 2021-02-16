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
