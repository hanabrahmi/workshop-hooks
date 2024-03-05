import React, { useState } from 'react';
import MovieList from '../MovieList/MovieList';

const Filter = ({ratingChange,searchInput, movieData}) => {
const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase()) && movie.rating >= ratingChange
);

return (
    <div>
        <MovieList filteredMovies={filteredMovies} />
    </div>
);
};

export default Filter;