import React from 'react'

const MovieItem = ({movie}) => {
    return (
        <div className="card" style={{width: '100%'}}>
            <img 
                className="card-img-top card-img--height"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title} 
            />
           <div className="card-body">
               <h6 className="card-title">{movie.title}</h6>
                <div className="card-text">Рейтинг: {movie.vote_average}</div>
           </div>
        </div>
    )
}

export default MovieItem