import React, { useState, useEffect } from 'react'
import { API_KEY_3, API_URL } from '../../api/api';

export default function Genres({onChangeGenre}) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
      const url = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-Ru`
      fetch(url).then(res => res.json()).then(data => setGenres(data.genres))
        
    }, []);

    return (
        <>
            {genres.map(genre => (
                <div className="form-check" key={genre.id}>
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        value={genre.id}
                        onChange={onChangeGenre}
                        id={genre.id} />
                    <label className="form-check-label" htmlFor={genre.id} style={{ textTransform:'capitalize'}}>
                        {genre.name}
                    </label>
                </div>
            ))}
        </>
    )
}
