import React, {Component} from "react";
import {PersonalBlock} from "../../components/PersonalBlock/PersonalBlock";
import {connect} from "react-redux";
import {setUser} from "../../store/user/actions";

class PersonalBlockContainer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <PersonalBlock user={this.props.user} countCartItems={this.props.cartItems.length} onChangeToken={this.props.onChangeToken} />
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
    setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalBlockContainer);