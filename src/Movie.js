import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movies }) => {
  return (
    <>
      <h1>Movies List</h1>
      <section className='container'>
        {movies.map((movie) => {
          return (
            <div className='movie'>
              <div className='header'>
                <Link to={'movies/' + movie.id} className='title'>
                  {movie.title}
                </Link>
                <div>
                  <strong>Tagline: </strong>
                  {movie.tagline ? movie.tagline : 'N/A'}
                </div>
              </div>
              <div>
                <strong>Rating: </strong>
                {movie.vote_average}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Movie;
