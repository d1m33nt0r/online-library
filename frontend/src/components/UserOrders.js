import React, {Component} from "react";
import Axios from "axios";
import {UserOrderList} from "./UserOrderList";

export class UserOrders extends Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: null
        }

        this.getOrders = this.getOrders.bind(this)
    }

    componentDidMount() {
        if (this.props.user)
        {
            this.getOrders()
        }
    }

    getOrders() {
        Axios.get("http://localhost:3000/my-orders", {
            headers: {
                user_id: this.props.user.id
            }
        })
            .then(res => {
                console.log(res.data)
                this.setState({orders: res.data})
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render() {
        let emptyOrders = <div className="container">
            <div className="row">
                <div className="col" />

                <div className="col-6 justify-content-md-center">
                    <p>You have not made any orders yet</p>
                </div>

                <div className="col" />
            </div>
        </div>

        let orders = <div>
            <UserOrderList orders={this.state.orders} />
        </div>

        let modalWindow = <div className="modal fade" id="userOrdersModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">My orders</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {this.state.orders ? orders : emptyOrders}
                    </div>
                </div>
            </div>
        </div>

        return(modalWindow)
    }
}