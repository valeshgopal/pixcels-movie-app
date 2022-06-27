import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  console.log(movies);
  // const [movie, setMovie] = useState(null);
  const { id } = useParams();

  // console.log(movies);
  const [getMovie] = movies.filter((movie) => Number(movie.id) === Number(id));
  console.log(getMovie);

  return (
    <section className='details-container'>
      <h1>Movie Details</h1>
      <div className='movie-details'>
        <div>
          <strong>Title: </strong>
          {getMovie.title}
        </div>
        <div>
          <strong>Tagline: </strong>
          {getMovie.tagline ? getMovie.tagline : 'N/A'}
        </div>
        <div>
          <strong>Plot: </strong>
          {getMovie.overview}
        </div>
        <div>
          <strong>Status: </strong>
          {getMovie.status}
        </div>
        <div>
          <strong>Release Date: </strong>
          {getMovie.release_date}
        </div>
        <div>
          <strong>Run Time: </strong>
          {getMovie.runtime} mins
        </div>
        <div>
          <strong>Rating: </strong>
          {getMovie.vote_average} ({getMovie.vote_count} votes)
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
