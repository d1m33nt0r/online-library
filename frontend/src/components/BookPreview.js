import React, {Component} from "react";
import Cookies from 'js-cookie';
import Axios from "axios";
import {getCartItems} from "../store/cart/actions";
import {connect, useDispatch} from "react-redux";

let style = {
    marginLeft: 0
}

let marginTop = {
    marginTop: 5
}

export const BookPreview = (props) => {

    const dispatch = useDispatch()

    const addCart = () => {
        Axios.post("http://localhost:3000/add-to-cart", {
            user_id: props.user.id,
            book_id: props.book.id
        })
            .then(res => {
                dispatch(getCartItems())
            })
    }

    return(
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.book.author}</h6>
                <div className="row">
                    <div className="col-6">
                        <div className="row" style={style}>
                            <button className="btn btn-outline-secondary">Read more</button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row" style={style}>
                            <button className="btn btn-outline-success" onClick={addCart}>+</button>
                        </div>
                    </div>
                    <div className="col-4" style={marginTop}>
                        <p>Price: {props.book.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}