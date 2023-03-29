import React from "react";
import { Form, Button, Modal } from 'react-bootstrap';



class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.bookToBeUpdated?._id,
      Title: this.props.bookToBeUpdated?.Title,
      Description: this.props.bookToBeUpdated?.Description,
      newYorkBestseller: this.props.bookToBeUpdated?.newYorkBestseller,
  
    }
  }
  handleBookSubmit = (event) => {
    event.preventDefault();

    if (this.props.bookToBeUpdated) {
      let bookToUpdate = {

        Title: event.target.Title.value,
        Description: event.target.Description.value,
        newYorkBestseller: event.target.newYorkBestseller.checked,
        _id: this.props.bookToBeUpdated._id,
        __v: this.props.bookToBeUpdated.__v
      }
      this.props.updateBook(bookToUpdate)
    } else {
      let bookToCreate = {

        Title: event.target.Title.value,
        Description: event.target.Description.value,
        newYorkBestseller: event.target.newYorkBestseller.checked,
      }
      this.props.postBook(bookToCreate);
    }
    this.props.handleCloseModal();
  }

  changeTitle = (event) => {
    this.setState({
      Title: event.target.value
    })

  }

  changeDescription = (event) => {
    this.setState({
      Description: event.target.value
    })

  }

  changeBestseller = (event) => {
    this.setState({
      newYorkBestseller: event.target.checked
    })

  }


  render() {
    console.log(this.props)
    return (
      <>
        <Modal show={this.props.modalPop} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.bookToBeUpdated ? 'Update My Favorite Book' : 'Add Book to My Favorites'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={this.changeTitle} />
              </Form.Group>
              <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" onChange={this.changeDescription} />
              </Form.Group>
              <Form.Group controlId="newYorkBestseller">
                <Form.Label>newYorkBestseller</Form.Label>
                <Form.Check type="checkbox" onChange={this.changeBestseller} />
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

