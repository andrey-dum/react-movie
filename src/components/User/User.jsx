import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { API_KEY_3, API_URL, fetchApi } from '../../api/api'
import Cookies from 'universal-cookie'
import { logout } from '../../store/auth/actions'



const cookies = new Cookies()


export default function User() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const sessionId = useSelector(state => state.auth.sessionId)

    const onLogout = () => {
        cookies.remove('session_id')
        dispatch(logout())
    }


  
    const handleLogout = () => {
        fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                session_id: sessionId
            })
        }).then(() => {
            onLogout()
        })
    }

    return (
        <div className="user">
            <img
                src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64` } 
                alt={user.username}
                style={{marginRight: 12, width: 40, height: 'auto', borderRadius: '50%'}}
                />
            {user.username}
            
            <button 
                className="btn btn-outline-light" 
                type="button"
                style={{marginLeft: 12}}
                onClick={handleLogout}
            >Выйти</button>
        </div>
    )
}
