import React from 'react'
import Login from '../Login/Login'

export default function Header() {
    return (
        <nav className="navbar navbar navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand">MovieApp</a>
                <Login />
            </div>
        </nav>
    )
}
