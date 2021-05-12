import React, {Component} from "react";
import Axios from "axios";
import {RowPreview} from "./RowPreview";

export class Catalog extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }

        this.getBooks = this.getBooks.bind(this)
        this.parseBooks = this.parseBooks.bind(this)
        this.refreshCart = this.refreshCart.bind(this)
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks() {
        let response = Axios.get("http://localhost:3000/catalog")
        response.then(res => {
            this.parseBooks(res.data)
        })
    }

    parseBooks(books){

        let divider = 4
        let denominator = books.length / divider
        let parsedBooks = []

        let i = 0, j = 0;
        let row = []

        while (i < denominator)
        {
            while (j < books.length)
            {
                if(j !== 0 && j % divider === 0)
                {
                    parsedBooks.push(row)
                    row = []
                }

                row.push(books[j])
                j++
                if (j === books.length) parsedBooks.push(row)
            }
            i++
        }

        this.setState({books: parsedBooks})
    }

    refreshCart(){
        this.props.refreshCart();
    }

    render() {
        return(
            <div className="container">
                {
                    this.state.books.map((row, i) =>
                        <RowPreview key={i++} row={row} user={this.props.user} refreshCart={this.refreshCart}/>
                    )
                }
            </div>
        )
    }
}