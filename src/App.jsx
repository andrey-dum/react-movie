import React, {useState, useEffect} from 'react'
import './App.css';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import MovieList from './components/Movies/MovieList';
import Cookies from 'universal-cookie'
import { API_KEY_3, API_URL, fetchApi } from './api/api';
import Movies from './components/Movies/Movies';

const cookies = new Cookies()

const filtersData = {
  sort_by: 'popularity.desc',
  primary_release_year: '2021',
  genres: [],
}

export const AppContext = React.createContext()

function App() {
  
  const [filters, setFilters] = useState(filtersData);
  const [page, setPage] = useState(1);

  const [user, setUser] = useState(null)
  const [sessionId, setSessionId] = useState(null)

  useEffect(() => {
    const checkAuth = async (session_id) => {
      const userObj = await fetchApi(`${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`)
      setUser(userObj)
    }

    const sessId = cookies.get('session_id')

    if(sessId) {
      checkAuth(sessId)
    }
    

  }, []);

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

  const updateUser = (userObj) => {
    setUser(userObj)
  }

  const onLogout = () => {
    setSessionId(null)
    setUser(null)
    cookies.remove('session_id')
  }
  
  const updateSessionId = (session_id) => {
    setSessionId(session_id)
    cookies.set('session_id', session_id, {
      path: "/",
      maxAge: 3600
    })
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

    setFilters({
      ...filters,
      genres: newGenres
    })

  }
  


  return (
    <AppContext.Provider value={{
      user,
      updateUser,
      updateSessionId,
      onLogout,
      sessionId

    }}>
    <div className="app">
      <Header
        updateUser={updateUser}
        user={user}
        updateSessionId={updateSessionId}
      />
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
    </div>
    </AppContext.Provider>
  );
}

export default App;
