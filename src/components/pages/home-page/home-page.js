import React from "react";
import BookList from "../../book-list/book-list-container";

import './home-page.css'
import ShoppingCartTable from "../../shopping-cart-table";

export const HomePage = () => {

    return (
        <div>
            <BookList />
            <ShoppingCartTable/>
        </div>


    )
}