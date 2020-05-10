const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
 }

 const booksError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
 }

 const bookAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
 }

 const fetchBooks = (dispatch, bookstoreService) => () => {
     dispatch(booksRequested());
     bookstoreService.getBooks()
         .then((data) => dispatch(booksLoaded(data)))
         .catch((err) => dispatch(booksError(err)));
}

const cartItemIncreased = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
}

const cartItemDecreased = (id) => {
    return {
        type: 'CART_ITEM_DECREASE',
        payload: id
    }
}

const cartItemRemoved = (id) => {
    return {
        type: 'CART_ITEM_REMOVE',
        payload: id
    }
}

 export {
    fetchBooks,
     cartItemDecreased,
     cartItemIncreased,
     cartItemRemoved,
     bookAddedToCart
 }