import React, {Component} from "react";

const margin = {
    marginLeft: 10
}

export class Order extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr key={this.props.key}>
                <th scope="row">{this.props.key}</th>
                <td scope="col" key={this.props.order.title}>{this.props.order.title}</td>
                <td scope="col" key={this.props.order.code}>{this.props.order.code}</td>
                <td scope="col" key={this.props.order.author}>{this.props.order.author}</td>
                <td scope="col" key={this.props.order.price}>{this.props.order.price}</td>
                <td scope="col" key={this.props.order.date}>{this.props.order.date}</td>
                <td scope="col" key={this.props.order.status}>{this.props.order.status}</td>
                <td scope="col" key={this.props.order.username}>{this.props.order.username}</td>
                <td scope="col" key={this.props.order.phone}>{this.props.order.phone}</td>
                <td scope="col" key={this.props.order.id}>
                    <button className="btn btn-outline-success btn-sm">Confirm</button>
                    <button className="btn btn-outline-danger btn-sm" style={margin}>Reject</button>
                </td>
            </tr>
        )
    }
}