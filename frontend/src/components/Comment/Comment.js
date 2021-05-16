import React, {Component} from "react";

const margin ={
    marginTop: 10
}

export class Comment extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="card" style={margin} >
                <div className="card-body">
                    <h5 className="card-title">{this.props.comment.author}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.comment.datetime}</h6>
                    <p className="card-text">{this.props.comment.text}</p>
                </div>
            </div>
        )
    }
}