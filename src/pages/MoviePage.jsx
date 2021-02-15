import React, {useEffect, useState} from 'react'
import MovieApi from '../api/api'
import Preloader from '../components/UIComponents/Preloader'

export default function MoviePage({match}) {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        MovieApi.get(`/movie/${match.params.id}`,{
            params: {
                language: "ru-RU"
            }
        }).then(film => setMovie(film))

        return () => setMovie(null)

    }, [match.params.id])

    if(!movie) {
        return <Preloader />
    }

    return (
        <div className="container">
            <div className="row mt-4">

                <div className="col-4">
                <img 
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${ movie.poster_path || movie.backdrop_path  }`}
                    alt={movie.title} 
                />
                </div>
                
                <div className="col-8">
                    <h1>{ movie.title }</h1>
                    <h6>{movie.tagline}</h6>
                    <hr/>
                    <p>{movie.overview}</p>
                </div>

            </div>
        </div>
    )
}
