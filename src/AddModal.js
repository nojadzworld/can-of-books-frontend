import React from "react";
import { Form, Button, Modal } from 'react-bootstrap';



class AddModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.modalPop} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleBookSubmit}>
              <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="newYorkBestseller">
                <Form.Label>newYorkBestseller</Form.Label>
                <Form.Check type="checkbox" />
              </Form.Group>
              <Button type="submit">Add Book</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>

    );
  }
}
export default AddModal;

