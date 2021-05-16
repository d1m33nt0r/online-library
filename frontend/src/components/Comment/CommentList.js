import React, {Component} from "react";
import {Comment} from "./Comment";
import {CommentForm} from "./CommentForm";

const margin ={
    marginTop: 20
}

export class CommentList extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let propsLoaded = this.props.comments !== undefined

        return(
            propsLoaded ?
            <div className="container" style={margin}>
                <div className="row">
                    <div className="col-2" />
                    <div className="col">
                        <div style={margin}>
                            <p>Reviews</p>
                        </div>
                        {
                            this.props.comments.map((comment, i) =>
                                <Comment key={i} comment={comment} />
                            )
                        }
                        <div style={margin} />
                        <CommentForm user={this.props.user} book={this.props.book} setComments={this.props.setComments} />
                    </div>
                    <div className="col-2" />
                </div>
            </div> :
                <></>
        )
    }
}