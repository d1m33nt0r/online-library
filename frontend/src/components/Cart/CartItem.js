import React, {Component} from "react";
import Axios from "axios";

export class CartItem extends Component{

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            author: "",
            price: "",
            book_id: "",
            user_id: ""
        }

        this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount() {
        this.setState({book: this.props.book})
    }

    removeItem(){
        this.props.removeItem(this.state.book.book_id, this.state.book.user_id)
    }

    render() {
        return(
            <tr key={this.props.iterator + 1}>
                <th scope="row">{this.props.iterator + 1}</th>
                <td key={this.props.book.title}>{this.props.book.title}</td>
                <td key={this.props.book.author}>{this.props.book.author}</td>
                <td key={this.props.book.price}>{this.props.book.price}</td>
                <td key={this.props.book.id}>
                        <button className="btn btn-outline-danger btn-sm" onClick={this.removeItem}>X</button>
                </td>
            </tr>
        )
    }
}