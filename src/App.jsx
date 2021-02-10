import React, {useState} from 'react'
import './App.css';
import Filters from './components/Filters/Filters';
import MovieList from './components/Movies/MovieList';

const filtersData = {
  sort_by: 'popularity.asc',
}


function App() {
  const [filters, setFilters] = useState(filtersData);

  const changeFilterHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setFilters({
      ...filters, 
      [e.target.name]: e.target.value 
    })
  }
  

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <div className="card" style={{width: '100%'}}>
            <div className="card-body">
              <h3>Фильтры:</h3>
              <Filters filters={filters} changeFilterHandler={changeFilterHandler}/>
            </div>
          </div>
        </div>
        <div className="col-8">
          <MovieList filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default App;
