import React from 'react'
import { API_KEY_3, API_URL, fetchApi } from '../../api/api'
import { AppContext } from '../../App'


export default function User() {
    const {user, updateUser, sessionId, onLogout} = React.useContext(AppContext)

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
