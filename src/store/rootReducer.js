import { combineReducers } from "redux"
import authReducer from "./auth/authReducer"
import movieReducer from './movies/movieReducer'


export default combineReducers({
    movies: movieReducer,
    auth: authReducer
})
