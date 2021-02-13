import React from 'react'
import Login from '../Login/Login'
import User from '../User/User'

export default function Header({updateUser, user}) {
    return (
        <nav className="navbar navbar navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand">MovieApp</a>
                {user ? 
                    <User
                        user={user}
                    />
                    :
                    <Login
                        updateUser={updateUser}
                    />
                }
                
            </div>
        </nav>
    )
}
