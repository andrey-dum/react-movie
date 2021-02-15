import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../Login/Login'
import User from '../User/User'

export default function Header({user, updateSessionId}) {
    return (
        <nav className="navbar navbar navbar-dark bg-primary">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">MovieApp</NavLink>
                {user ? 
                    <User />
                    :
                    <Login
                        updateSessionId={updateSessionId}
                    />
                }
                
            </div>
        </nav>
    )
}
