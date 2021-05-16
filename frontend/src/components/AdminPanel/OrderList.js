import React, {Component} from "react";
import {Order} from "./Order";

export class OrderList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            this.props.orders ?
            <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Book</th>
                                <th scope="col">Code ISBN</th>
                                <th scope="col">Author</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">User</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                {
                    this.props.orders.map((order, i) =>
                        <Order key={i} order={order} />
                    )
                }
                    </tbody>
                </table>

            </div>
                 :
                <></>
        )
    }
}