import updateBookList from "../actions/book-list";
import updateShoppingCart from "../actions/shopping-cart";

const reducer = (state, action) => {
        return {
            bookList: updateBookList(state, action),
            shoppingCart: updateShoppingCart(state, action)
        }
};

export default reducer;