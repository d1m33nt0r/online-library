import React, {Component} from "react";
import Axios from "axios";
import {CartItemList} from "./CartItemList";

export class Cart extends Component{

    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        }

        this.getCart = this.getCart.bind(this)
    }

    componentDidMount() {
        this.getCart()
    }

    getCart() {
        Axios.get("http://localhost:3000/my-cart", {
            headers: {
                user_id: this.props.user.id
            }
        })
            .then(res => {
                this.props.setCartItems(res.data)
                this.setState({cartItems: res.data})
            })
    }

    render() {
        let emptyCart = <div className="container">
            <div className="row">
                <div className="col" />

                <div className="col-6">
                    <p>You have not made any orders yet</p>
                </div>

                <div className="col" />
            </div>
        </div>

        let cartBody = <div>
            <div className="modal-body">
                <CartItemList getCart={this.getCart} books={this.props.cartItems} />
            </div>
        </div>

        let cartFooter = <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-danger">Clear all</button>
            <button type="button" className="btn btn-success">Confirm</button>
        </div>

        let cart = <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">You cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    {this.props.cartItems.length === 0 ? emptyCart : cartBody}
                    {cartFooter}
                </div>
            </div>
        </div>

        return(
            cart
        )
    }
}