import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Preloader() {
    return (
        <div className="text-center preloader" style={{marginTop: 120}}>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
        </div>
    )
}
