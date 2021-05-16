import React, {Component} from "react";
import {connect} from "react-redux";
import {setComments} from "../../store/comment/actions";
import {CommentList} from "../../components/Comment/CommentList";
import Axios from "axios";

class CommentListContainer extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/comments", {
            headers: {
                book_id: this.props.book.id
            }
        }).then(res => {
            this.props.setComments(res.data)
        })
    }

    render() {
        return <CommentList setComments={this.props.setComments} book={this.props.book}
                            comments={this.props.comments} user={this.props.user} />
    }
}

const mapStateToProps = state => {
    return {
        comments: state.commentReducer.comments,
        user: state.userReducer.user,
        book: state.bookReducer.book
    }
}

const mapDispatchToProps = {
    setComments
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);