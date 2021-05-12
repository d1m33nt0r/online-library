import React, {Component} from "react";
import {BookPreview} from "./BookPreview";

const style = {
    marginTop: 20
}

export class RowPreview extends Component{

    constructor(props) {
        super(props);

        this.refreshCart = this.refreshCart.bind(this)
    }

    refreshCart(){
        this.props.refreshCart()
    }

    render() {
        return(
                <div className="row justify-content-md-center" style={style}>
                    {
                        this.props.row.map((book, i ) =>
                            <div key={i++} className="col-3 justify-content-center align-content-center">
                                <BookPreview key={book.title} user={this.props.user} refreshCart={this.refreshCart} book={book} />
                            </div>
                        )
                    }
                </div>
        )
    }
}