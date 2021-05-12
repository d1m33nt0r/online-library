import React, {Component} from "react";
import Axios from "axios";

export class Registration extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstname: "",
            lastname: "",
            phone: "",
            password: "",
            error: false,
            success: false,
            loading: false,
            msg: ""
        }

        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.register = this.register.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    changeEmail(e) {
        this.setState({email: e.target.value})
    }

    changeFirstName(e) {
        this.setState({firstname: e.target.value})
    }

    changeLastName(e) {
        this.setState({lastname: e.target.value})
    }

    changePhone(e) {
        this.setState({phone: e.target.value})
    }

    changePassword(e) {
        this.setState({password: e.target.value})
    }

    register() {
        Axios.post('http://localhost:3000/register', {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            password: this.state.password
        }).then(res => {
            setTimeout(() => {
                if(res.status === 200)
                    this.setState({success: true, error: false, msg: "Registration successfully!"})
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
            error: false,
            success: false,
            loading: false,
            email: "",
            firstname: "",
            lastname: "",
            phone: "",
            password: "",
            msg: ""
        })
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
                <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={this.refresh}>Continue</button>
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
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">Firstname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="firstName"
                               value={this.state.firstname} onChange={this.changeFirstName}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Lastname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lastName"
                               value={this.state.lastname} onChange={this.changeLastName}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone"
                               value={this.state.phone} onChange={this.changePhone}/>
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
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" onClick={this.register}>Register</button>
            </div>
        </div>

        let registerForm = <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel"
                             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="registrationModalLabel">Registration</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.refresh}/>
                    </div>
                        {this.state.error ? error : this.state.success ? success : form}
                </div>
            </div>
        </div>

        return(
            registerForm
        )
    }
}