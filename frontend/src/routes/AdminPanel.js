import React, {Component} from "react";
import Axios from "axios";
import {OrderList} from "../components/AdminPanel/OrderList";

export class AdminPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }

        this.getAllOrders = this.getAllOrders.bind(this)
    }

    componentDidMount() {
        this.getAllOrders()
    }

    getAllOrders() {

        Axios.get('http://localhost:3000/all-orders', )
            .then(res => {
                this.setState({orders: res.data})
            })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-10">
                        <OrderList orders={this.state.orders} />
                    </div>
                </div>

            </div>

        )
    }
}