const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, +1);

        case 'CART_ITEM_DECREASE':
            return updateOrder(state, action.payload, -1);

        case 'CART_ITEM_REMOVE':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload)

            return updateOrder(state, action.payload, -item.count)

        default:
            return state.shoppingCart;
    }
};

const updateOrder = (state, bookId, amount) => {

    const { bookList: {books}, shoppingCart: {cartItems}  } = state;

    const book = books.find((book) => book.id === bookId);
    const existingBookIdx = cartItems.findIndex((item) => item.id === bookId);
    const existingBook = cartItems[existingBookIdx];

    let newItem = updateCartItem(book, existingBook, amount);

    return {
        orderTotal: state.shoppingCart.orderTotal + amount*book.price,
        cartItems: updateCartItems(newItem, existingBookIdx, cartItems),
    }
};

const updateCartItems = (item, index, state) => {

    if(item.count === 0) {
        return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ]
    }


    if (index < 0) {

        return [...state, item]
    }

    return [
        ...state.slice(0, index),
        item,
        ...state.slice(index + 1)
    ]
};

const updateCartItem = (book, existingBook, amount) => {

    if(existingBook) {

        return {
            ...existingBook,
            count: existingBook.count + amount,
            total: existingBook.total + book.price*amount
        }
    }

    return {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price
    }

};

export default updateShoppingCart;