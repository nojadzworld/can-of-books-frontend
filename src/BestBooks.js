import React from 'react';
import axios from 'axios';
import {Carousel, Button} from 'react-bootstrap';
import AddModal from './AddModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalPop: false
    }
  }

  handleCloseModal = () =>{
    this.setState({
      modalPop: false
    })
  }

  handleOpenModal = () =>{
    console.log('handleOpenModal')
    this.setState({
      modalPop: true,
      
    })
  }  



  getBooks = async () => {

    try {

      let url = `${process.env.REACT_APP_SERVER}/book`
      // let url = 'http://localhost:3002/book'
      console.log(url)
      let bookData = await axios.get(url);
      console.log(bookData.data)
      this.setState({
        books: bookData.data
      })

    } catch (error) {
      console.log(error.response)
    }
  }

  deleteBook = async (id) => {
    try {

      // TODO: AXIOS is going to send an ID of the cat to delete
      let url = `${process.env.REACT_APP_SERVER}/book/${id}`

      await axios.delete(url);

      // TODO: UPDATE STATE TO REMOVE THAT DELETED CAT
      let updatedBooks = this.state.bookss.filter(book => book._id !== id);

      this.setState({
        cats: updatedBooks
      })

    } catch (error) {
      console.log(error.response)
    }
  }

  handleBookSubmit = (event) => {
    event.preventDefault();

    // TODO: Build a cat object based off of the form data
    let bookObj = {
      Title: event.target.Title.value,
      Description: event.target.Description.value,
      newYorkBestseller: event.target.newYorkBestseller.checked,
      
    }

    this.postBook(bookObj);
    this.handleCloseModal();
  }

 // *** HANDLER #2 - POST TO THE DATABASE
  postBook = async (bookObj) => {
    try {
      // TODO: build the url, use axios and add the cat

      let url = `${process.env.REACT_APP_SERVER}/book`

      // *** On a post, we pass in 2 args to axios, 1st is the url, 2nd is the data that will go on the request.body
      let createdBook = await axios.post(url, bookObj)

      this.setState({
        books : [...this.state.books, createdBook.data]
      })
      
    } catch (error) {
      console.log(error.message)
    }
  }

  componentDidMount() {
    this.getBooks();
  }



  render() {


    console.log(this.state.books)




    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddModal handleBookSubmit = {this.handleBookSubmit}
        handleCloseModal = {this.handleCloseModal}
        modalPop = {this.state.modalPop}
        />

        <Button onClick = {this.handleOpenModal}>Add New Book</Button>
       
        {this.state.books.length ? (
       
          <Carousel>
          
            {this.state.books.map((book) => {
              return (
                <Carousel.Item key={book._id}>

<img
              className='d-block w-50'
              src='https://via.placeholder.com/100'
              alt=''
            />

                  <h3>{book.Title}</h3>
                  <Carousel.Caption>
                    <p>{book.Description}</p>
                    <p>{book.newYorkBestseller}</p>
                    <Button onClick={() => {this.deleteBook(book._id)}}>Delete</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>

    )
  }
}

export default BestBooks;
