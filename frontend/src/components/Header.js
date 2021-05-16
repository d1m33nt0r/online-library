import React, { Component } from "react";
import PersonalBlockContainer from "../containers/components/PersonalBlockContainer";
import {Link} from "react-router-dom";

export class Header extends Component {

    constructor(props) {
        super(props)

        this.onChangeToken = this.onChangeToken.bind(this)
    }

    onChangeToken(token) {
        this.props.onChangeToken(token)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Library app</a>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">News</a>
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                            <Link className="nav-link" to="/book">Book</Link>
                            <a className="nav-link" href="#">About us</a>
                        </div>
                    </div>
                    <PersonalBlockContainer onChangeToken={this.onChangeToken} />
                </div>
            </nav>
        );
    }
}