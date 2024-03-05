import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './style.css';
const MovieList = ({ filteredMovies }) => {
  return (
    <div className='movie-list'>
        {filteredMovies.map((movie, index) => {
            return <MovieCard movie= {movie} key={index}/>; })}
    </div>
  );
};

export default MovieList;
