// import { FETCH_MOVIES_ERROR, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "./actionTypes"
import * as movieTypes from './actionTypes'

const initialState = {
    movies: [],
    page: 1,
    total_page: 100,
    loading: false,
    error: null,
    genres: [],
    filters: {
        sort_by: 'popularity.desc',
        primary_release_year: '2021',
        genres: [],
    }
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
        case movieTypes.FETCH_GENRES:
            return {
                ...state,
                genres: action.payload
            }


        case movieTypes.CHANGE_FILTERS:
            return {
                ...state,
                filters: {...state.filters, ...action.payload},
                page: 1
            }
        case movieTypes.ON_CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default:
            return state
    }
}

