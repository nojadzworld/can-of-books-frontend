import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
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

  componentDidMount() {
    this.getBooks();
  }

  render() {




    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (

          <Carousel>
            <img
              className='d-block w-100'
              src='https://via.placeholder.com/100'
              alt=''
            />
            {this.state.books.map((book) => {
              return (
                <Carousel.Item key={book.Title}>

                  <h3>{book.Title}</h3>
                  <Carousel.Caption>
                    <p>{book.Description}</p>
                    <p>{book.newYorkBestseller}</p>
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
