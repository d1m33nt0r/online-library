import React, {Component} from "react";
import {connect, useDispatch} from "react-redux";
import {setBook} from "../../store/book/actions";
import {Book} from "../../routes/Book";

class BookContainer extends Component{

    render() {
        return(
            <Book book={this.props.book} setBook={this.props.setBook} />
        )
    }
}

const mapStateToProps = state => {
    return {
        book: state.bookReducer.book
    }
}

const mapDispatchToProps = {
    setBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)