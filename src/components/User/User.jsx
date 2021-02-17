import React from 'react'
import {useSelector} from 'react-redux'
import { useActions } from '../../hooks/useActions'



export default function User() {
    const user = useSelector(state => state.auth.user)
    const sessionId = useSelector(state => state.auth.sessionId)

    const {onLogout} = useActions()

  
    const handleLogout = () => {
        onLogout(sessionId)
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
