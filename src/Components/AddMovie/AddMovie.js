import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const AddMovie = ({ show, handleClose, newMovie, setNewMovie, handelSave}) => {
    const handleChange = (e) => {
        setNewMovie( {
            ...newMovie,
            [e.target.name]:e.target.value,

        })
    };
    console.log(newMovie);
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add New Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="movie title" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" placeholder='movie description' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Poster Url</Form.Label>
        <Form.Control type="text" name="posterUrl" placeholder="movie poster" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" name="rating" placeholder="movie rate" onChange={handleChange}/>
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handelSave}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default AddMovie