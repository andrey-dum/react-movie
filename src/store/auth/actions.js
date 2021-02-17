import MovieApi, { API_KEY_3, API_URL, fetchApi } from "../../api/api"
import * as authTypes from "./actionTypes"
import {cookies} from '../../utils/cookies'




export const updateAuth = (payload) => ({type: authTypes.UPDATE_AUTH, payload})  
// export const autoAuth = (payload) => ({type: authTypes.AUTO_AUTH, payload})  

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


export const onLogout = (session_id) => {
    return async dispatch => {
        fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                session_id: session_id
            })
        }).then(() => {
            cookies.remove('session_id')
            dispatch(logout())
        })

    }
}

