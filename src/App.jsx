import React, {useState} from 'react'
import './App.css';
import Filters from './components/Filters/Filters';
import MovieList from './components/Movies/MovieList';

const filtersData = {
  sort_by: 'popularity.desc',
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
  );
}

export default App;
