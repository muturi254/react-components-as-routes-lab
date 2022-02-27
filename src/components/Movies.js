import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

// helper functions
const renderMovies = () => {
  return movies.map((data, index) => (
    <div key={index}>
      <h2>{data.title}</h2>
      <p>{ data.time }</p>
      <p>Genres:</p>
      <ul>{ data.genres.map((genre, index) => (<li key={index}>{genre}</li>))}</ul>
    </div>
  ));
}

export default Movies;
