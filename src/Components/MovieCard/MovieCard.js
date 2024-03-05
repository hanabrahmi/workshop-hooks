import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import './MovieCardStyle.css';
const MovieCard = ({ movie , key }) => {
  return (
    <div key={key} >
      <Card style={{ width: '18rem'  }} className=' movie-card'>
        <Card.Img variant="top" src={movie.posterUrl} className='img-card'/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <ReactStars
            count={5}
            value={parseFloat(movie.rating)} 
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
          <p>{movie.description}</p>
        </Card.Body>
        
      </Card>
    </div>
  );
}

export default MovieCard;
