import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { API_KEY_3, API_URL } from '../../api/api';
import { useActions } from '../../hooks/useActions';

export default function Genres({onChangeGenre}) {
    // const [genres, setGenres] = useState([]);
    const genres = useSelector(state => state.movies.genres)
    const { fetchGenres } = useActions()
    

    useEffect(() => {
    //   const url = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`
    //   fetch(url).then(res => res.json()).then(data => setGenres(data.genres))
    fetchGenres()
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
