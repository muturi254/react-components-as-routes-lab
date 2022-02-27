import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { renderActors() }
    </div>
  );
};

const renderActors = () => {
  return actors.map((data, index) => (
    <div key={index}>
      <h2>Name: {data.name}</h2>
      <p>Movies</p>
      <ul>{data.movies.map((movie, index) => (<li key={index}>{movie}</li>))}</ul>
    </div>
  ));
}

export default Actors;
