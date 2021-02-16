import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../Login/Login'
import User from '../User/User'
import {useSelector} from 'react-redux'

export default function Header() {
    const user = useSelector(state => state.auth.user)

    return (
        <nav className="navbar navbar navbar-dark bg-primary">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">MovieApp</NavLink>
                {user ? 
                    <User />
                    :
                    <Login
                    />
                }
            </div>
        </nav>
    )
}
