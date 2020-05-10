const updateBookList = (state, action) => {

    if (state === undefined) {
        return {
            books: [],
            isLoading: true,
            error: '',
            numItems: 0
        }
    }

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                isLoading: true,
                numItems: 0
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                isLoading: false,
                numItems: 0
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                isLoading: false,
                error: action.payload,
                numItems: 0
            };
        default:
            return state.bookList;
    }
};

export default updateBookList