import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Filters from '../components/Filters/Filters';
import Movies from '../components/Movies/Movies';
import { useActions } from '../hooks/useActions';




function MoviesPage() {
  
  const filters = useSelector(state => state.movies.filters)
  const page = useSelector(state => state.movies.page)
  const {changeFilters, changePage} = useActions()

  const changeFilterHandler = (e) => {
    changeFilters({
      [e.target.name]: e.target.value 
    })
  }

  const onChangePage = (page) => {
    changePage(page)
  }


  const onChangeGenre = e => {
    const id = e.target.value
    const { genres } = filters
    let newGenres = []

    if (filters.genres.includes(id)) {
      newGenres = genres.filter(el => el !== id)
    } else {
      newGenres = [...genres, id]
    }
    
    changeFilters({
      genres: newGenres
    })
    console.log(newGenres);

  }

  return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters 
                  filters={filters} 
                  changeFilterHandler={changeFilterHandler}
                  page={page}
                  onChangePage={onChangePage}
                  onChangeGenre={onChangeGenre}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <Movies 
              filters={filters} 
              page={page}
            />
          </div>
        </div>
      </div>
  );
}

export default MoviesPage;
