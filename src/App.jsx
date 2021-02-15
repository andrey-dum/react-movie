import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Cookies from 'universal-cookie'
import { API_KEY_3, API_URL, fetchApi } from './api/api';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';

const cookies = new Cookies()

export const AppContext = React.createContext()

function App() {
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
      <Switch>
        
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/" component={MoviesPage} exact />
      </Switch>
      {/* <MoviesPage /> */}
    </div>
    </AppContext.Provider>
  );
}

export default App;
