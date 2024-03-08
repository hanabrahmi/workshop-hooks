import React from 'react'
import './movie-details-styles.css';

import Card from 'react-bootstrap/Card';
import { Form, useParams } from 'react-router-dom'
const MovieDetails = ({movieData}) => {
  const { movieId } = useParams();
  const findMovie = movieData.find((movie, index) => movie.id == movieId);
  console.log(findMovie);
  return (
    <div className='  card-style'>
       <Card className="text-center ">
      <Card.Header>Movie Details</Card.Header>
      <Card.Body>
        <Card.Title>{findMovie.title}</Card.Title>
        <Card.Text>
        <img src={findMovie.posterUrl } alt='poster url' className='img-style'/>
      <p>{findMovie.description}</p>
      <p>rating: {findMovie.rating}</p>
      <iframe width="450" 
      height="170"   
      src={findMovie.trailer}
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share" 
      allowfullscreen></iframe>
        </Card.Text>
        
      </Card.Body>
      
    </Card>
      
    </div>
  )
}

export default MovieDetails