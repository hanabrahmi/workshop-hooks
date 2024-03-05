import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from '../AddMovie/AddMovie';

const NavBars = ({ ratingChange, setRatingChanged , setSearchInput, newMovie,setNewMovie, handelSave }) => {
  const ratingChanged = (rating) => {
    setRatingChanged(rating);
  };

  const handleChange = (e) => { 
      setSearchInput(e.target.value);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark align-items-baseline" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MovieZone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant='secondary' onClick={handleShow}>Add New Movie </Button> 
          </Nav>
        </Container>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
          onChange={handleChange}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <ReactStars
            count={5}
            value={ratingChange}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </InputGroup>
      </Navbar>
      <AddMovie show ={show} handleClose={handleClose} 
      newMovie={newMovie} 
      setNewMovie={setNewMovie}
      handelSave={handelSave} />
    </>
  );
};

export default NavBars;
