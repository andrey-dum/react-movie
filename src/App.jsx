import React, {useState} from 'react'
import './App.css';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import MovieList from './components/Movies/MovieList';

const filtersData = {
  sort_by: 'popularity.desc',
  primary_release_year: '2021',
  genres: [],
}


function App() {
  const [filters, setFilters] = useState(filtersData);
  const [page, setPage] = useState(1);

  const changeFilterHandler = (e) => {
    setFilters({
      ...filters, 
      [e.target.name]: e.target.value 
    })
    setPage(1)
  }

  const onChangePage = (page) => {
    setPage(page)
  }
  // const setTotalPages = (totalPage) => {
  //   setState(totalPage)
  // }

  const onChangeGenre = e => {
    const id = e.target.value
    const { genres } = filters
    let newGenres = []

    if (filters.genres.includes(id)) {
      newGenres = genres.filter(el => el !== id)
    } else {
      newGenres = [...genres, id]
    }

    setFilters({
      ...filters,
      genres: newGenres
    })

  }
  


  return (
    <div className="app">
      <Header />
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
            <MovieList 
              filters={filters} 
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
