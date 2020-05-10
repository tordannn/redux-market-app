import React from "react";

import './book-list-item.css'

const BookListItem = ({book, onAddedToCart}) => {
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={book.coverImage} alt="programming book"/>
            </div>
            <div className="book-details">
                <a href="#123" className="book-title">{book.title}</a>
                <div className="boot-author">{book.author}</div>
                <div className="book-price">${book.price}</div>
                <button className="btn btn-info add-to-cart" onClick={onAddedToCart}>Add to cart</button>
            </div>
           
        </div>
    )
}

export {BookListItem}