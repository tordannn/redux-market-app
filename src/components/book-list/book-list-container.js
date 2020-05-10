import React from "react";
import { connect } from 'react-redux'
import withBookstoreService from "../hoc/with-bookstore-service";
import BookList from "./book-list";
import { bookAddedToCart, fetchBooks } from "../../actions";

import './book-list.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
          const { books, isLoading, error, onAddedToCart } = this.props;

          if (isLoading) {
              return <Spinner />
          }

          if (error) {
              console.log(error)
              return <ErrorIndicator />
          }

          return (
                <BookList books={books} onAddedToCart={onAddedToCart}/>
          )
    }
}

const mapStateToProps = ({bookList: {books, isLoading, error}}) => {
    return {
        books: books,
        isLoading: isLoading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {

    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))

    };
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));