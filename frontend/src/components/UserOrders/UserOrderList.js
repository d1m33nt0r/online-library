import React, {Component} from "react";

export class UserOrderList extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Book</th>
                    <th scope="col">Author</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.orders.map(order =>
                        <tr key={order}>
                            <th key={order.id} scope="row">1</th>
                            <td key={order.date}>{order.date}</td>
                            <td key={order.title}>{order.title}</td>
                            <td key={order.author}>{order.author}</td>
                            <td key={order.status}>{order.status}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}

