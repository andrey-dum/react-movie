import MovieApi from "../../api/api"
import * as authTypes from "./actionTypes"

import Cookies from 'universal-cookie'

const cookies = new Cookies()


export const updateAuth = (payload) => ({type: authTypes.UPDATE_AUTH, payload})  
export const logout = () => ({type: authTypes.LOGOUT})



export const getUser = (session_id) => {
    return async dispatch => {
        try {
            const user  = await MovieApi.get(`/account`, {
                params: {
                    session_id: session_id
                }
            })

            cookies.set('session_id', session_id, {
                path: "/",
                maxAge: 3600
            })
    
            dispatch(updateAuth({user: user, sessionId: session_id}))
        } catch (error) {
            console.log(error);
        }

    }
}
