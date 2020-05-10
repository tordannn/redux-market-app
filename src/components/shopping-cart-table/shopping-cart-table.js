import React from "react";

import './shopping-cart-table.css'
import { connect } from 'react-redux'

import {
    cartItemDecreased,
    cartItemIncreased,
    cartItemRemoved
} from "../../actions";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onRemove}) => {

    const renderRow = (item, idx) => {
        const {id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx+1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-plus-circle" />
                    </button>

                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm">
                        <i className="fa fa-minus-circle" />
                    </button>

                    <button
                        onClick={() => onRemove(id)}
                        className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>

                    {
                        items.map(renderRow)
                    }

                </tbody>

            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(cartItemIncreased(id)),
        onDecrease: (id) => dispatch(cartItemDecreased(id)),
        onRemove: (id) => dispatch(cartItemRemoved(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);