import React, {Component} from "react";
import Axios from "axios";

export class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.commentSend = this.commentSend.bind(this)
    }

    onChangeText(e) {
        this.setState({text: e.target.value})
    }

    commentSend() {

        Axios.post('http://localhost:3000/add-comment', {
            book_id: this.props.book.id,
            user_id: this.props.user.id,
            datetime: '2019-02-03',
            text: this.state.text
        })
            .then(res => {
                this.props.setComments(res.data)
            })
    }

    render() {
        return(
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write what you think about this book</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={this.onChangeText} rows="2">{this.state.text}</textarea>
                </div>
                <button type="submit" className="btn btn-outline-success" onClick={this.commentSend}>Send</button>
            </div>
        )
    }
}