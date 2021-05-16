import React, {Component} from "react";
import Axios from "axios";

export class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            success: false,
            loading: false,
            msg: "",
            token: ""
        }

        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
        this.refresh = this.refresh.bind(this)
        this.onChangeToken = this.onChangeToken.bind(this)
    }

    changeEmail(e) {
        this.setState({email: e.target.value})
    }

    changePassword(e) {
        this.setState({password: e.target.value})
    }

    login() {
        Axios.post('http://localhost:3000/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            setTimeout(() => {
                if(res.status === 200)
                    this.setState({success: true, error: false, msg: "Authorization successfully!", token: res.data.token})
            }, 1)
        }).catch(err => {
            setTimeout(() => {
                if (err.response)
                    this.setState({success: false, error: true, msg: "Error, Try again!"})
                else if (err.request)
                    this.setState({success: false, error: true, msg: "Error, no connection to the server!"})
                else
                    this.setState({success: false, error: true, msg: "Error, no connection to the server!"})
            }, 1)
        })
    }

    refresh() {
        this.setState({
            email: "",
            password: "",
            error: false,
            success: false,
            loading: false,
            msg: ""
        })
    }

    onChangeToken() {
        this.props.onChangeToken(this.state.token);
    }

    render() {
        let error = <div>
            <div className="alert alert-danger" role="alert">
                {this.state.msg}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={this.refresh}>Close</button>
                <button type="button" className="btn btn-success" onClick={this.refresh}>Try again</button>
            </div>
        </div>

        let success = <div>
            <div className="alert alert-success" role="alert">
                {this.state.msg}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={this.onChangeToken}>Continue</button>
            </div>
        </div>

        let form = <div>
            <div className="modal-body">

                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticEmail"
                               value={this.state.email} onChange={this.changeEmail}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword"
                               value={this.state.password} onChange={this.changePassword}/>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={this.refresh}>Close</button>
                <button type="button" className="btn btn-success" onClick={this.login}>Login</button>
            </div>
        </div>

        let loginForm = <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.refresh}></button>
                    </div>
                    {this.state.error ? error : this.state.success ? success : form}
                </div>
            </div>
        </div>

        return(
            loginForm
        )
    }
}