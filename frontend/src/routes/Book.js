import React, {Component} from "react";
import CommentList from "../containers/components/CommentListContainer";

const marginTop = {
    marginTop: 40
}

const marginTop2 = {
    marginTop: 20,
    marginRight: 20
}

const img = {
    width: 200,
    height: 270
}

const width = {
    width: 200
}

export class Book extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const view = <div className="container" style={marginTop}>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <div className="row justify-content-center">
                                <img src="https://img.chaconne.ru/rsz/img/3916406_710155.w300_h350.jpg" style={img}>

                                </img>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <p>
                                    Title: {this.props.book.title}
                                </p>
                            </div>
                            <div className="row">
                                <p>
                                    Author: {this.props.book.author}
                                </p>
                            </div>
                            <div className="row">
                                <p>
                                    Publishing house: {this.props.book.name}
                                </p>
                            </div>
                            <div className="row">
                                <p>
                                    Year of publish: {this.props.book.year}
                                </p>
                            </div>
                            <div className="row">
                                <p>
                                    Count pages: {this.props.book.count_pages}
                                </p>
                            </div>
                            <div className="row">
                                <p>
                                    Language: {}
                                </p>
                            </div>
                            <div className="row">
                                <p>
                                    Price: {this.props.book.price}
                                </p>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="row">
                                <button className="btn btn-success" style={width}>
                                    Add to cart
                                </button>
                            </div>

                            <div className="row" style={marginTop2}>
                                    Description: {this.props.book.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommentList book={this.props.book} />
        </div>

        return(
            view
        )
    }
}