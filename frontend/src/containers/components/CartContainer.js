import React, {Component} from "react";
import {Cart} from "../../components/Cart/Cart";
import {connect} from "react-redux";
import {setCartItems} from "../../store/cart/actions";

class CartContainer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return <Cart setCartItems={this.props.setCartItems} cartItems={this.props.cartItems} user={this.props.user} />
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.cartItems,
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    setCartItems
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);