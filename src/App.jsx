import React, {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import {cookies} from './utils/cookies'
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import { useActions } from './hooks/useActions';





function App() {
  const { getUser } = useActions()

  useEffect(() => {
    const sessId = cookies.get('session_id')
    
    if(sessId) {
      getUser(sessId)
    }

  }, []);


 
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/" component={MoviesPage} exact />
      </Switch>
    </div>
  );
}

export default App;
