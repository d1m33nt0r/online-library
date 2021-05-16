import React, {Component} from "react";
import {setCartItems} from "../../store/cart/actions";
import {connect} from "react-redux";
import {BookPreview} from "../../components/Catalog/BookPreview";

class BookPreviewContainer extends Component {

    render() {
        return(
            <BookPreview user={this.props.user} cartItems={this.props.cartItems} setCartItems={this.props.setCartItems} book={this.props.book} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        cartItems: state.cartReducer.cartItems
    }
}

const mapDispatchToProps = {
    setCartItems
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPreviewContainer)