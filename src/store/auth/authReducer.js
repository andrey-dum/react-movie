// import { LOGOUT, UPDATE_AUTH, UPDATE_USER } from "./actionTypes"
import * as authTypes from "./actionTypes"

const initialState = {
    user: null,
    sessionId: null,
    isAuth: false,
    favMovies: []
}

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case authTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload,
                isAuth: true

            }
        case authTypes.UPDATE_AUTH:
            return {
                ...state,
                user: action.payload.user,
                sessionId: action.payload.sessionId,
                isAuth: true

            }
        case authTypes.LOGOUT:
            return {
                ...state,
                user: null,
                sessionId: null,
                isAuth: false
            }
       
        

        default:
            return state
    }
}

