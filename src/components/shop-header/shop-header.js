import React from "react";
import { connect } from 'react-redux';

import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <a href="/" className="logo text-dark">Redux Market</a>
            <a href="/book-cart" className="shopping-cart">
                <i className='cart-icon fa fa-shopping-cart' />
                {numItems} items (${total})
            </a>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        total: state.shoppingCart.orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader)