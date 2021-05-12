import React, {Component} from "react";
import {CartItem} from "./CartItem";
import Axios from "axios";

export class CartItemList extends Component{

    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this)
    }

    removeItem(book_id, user_id) {
        Axios.delete('http://localhost:3000/my-cart', {
            headers:{
                book_id: book_id,
                user_id: user_id
            }
        })
            .then(res => {
                this.props.getCart()
            })
    }

    render() {
        let totalPrice = 0;

        this.props.books.map((book) => {
            totalPrice += book.price
        })

        return(
            <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.books.map((book, i) =>
                        <CartItem key={book.book_id} iterator={i} book={book} removeItem={this.removeItem}/>
                    )
                }
                </tbody>
            </table>
                <div className="container">
                    <div className="row d-inline-block">
                        <span>Total price</span>
                        <span>{totalPrice}</span>
                    </div>
                </div>
            </div>
        )
    }
}