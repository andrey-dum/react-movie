// import { FETCH_MOVIES_ERROR, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "./actionTypes"
import * as movieTypes from './actionTypes'

const initialState = {
    movies: [],
    page: 1,
    total_page: 100,
    loading: false,
    error: null
}

export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case movieTypes.FETCH_MOVIES_START:
            return {
                ...state,
               loading: true
            }
        case movieTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case movieTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

