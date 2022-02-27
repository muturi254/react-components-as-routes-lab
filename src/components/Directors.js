import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}


const renderDirectors = () => {
  return directors.map((data, index) =>(
    <div key={index}>
      <h2>Name: { data.name }</h2>
      <p>Movies</p>
      <ul>{ data.movies.map((movie, index) => (<li key={index}>{ movie }</li>))}</ul>
    </div>
  ));
}
export default Directors
