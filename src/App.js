import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import Movie from './Movie';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/movies').then((res) =>
      setMovies(res.data)
    );
  }, []);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Movie movies={movies} />} />
        <Route
          exact
          path='/movies/:id'
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </>
  );
}

export default App;
