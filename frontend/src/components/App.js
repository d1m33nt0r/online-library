import React, { Component } from "react";
import {Header} from "./Header";
import '../styles/App.css';
import Cookies from 'js-cookie';
import Axios from "axios";
import {Catalog} from "./Catalog";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from '../store/reducers';
import {logger} from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            updater: 1
        }

        this.onChangeToken = this.onChangeToken.bind(this)
        this.identification = this.identification.bind(this)
        this.refreshCart = this.refreshCart.bind(this)
    }

    componentDidMount() {
        let token = Cookies.get('token')
        if (token !== null)
            this.identification(token)
    }

    onChangeToken(token) {
        if (token !== null)
            Cookies.set('token', token)
        else
            Cookies.remove('token')

        this.identification(token)
    }

    identification(token) {
        if(token !== null)
        {
            Axios.get('http://localhost:3000/identification', {
                headers: {
                    token: token
                }
            }).then(res => {
                this.setState({user: res.data})
            }).catch(err => {
                this.setState({user: null})
            })
        }
        else
        {
            this.setState({user: null})
        }
    }

    refreshCart() {
        this.setState({updater: this.state.updater + 1})
    }

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Header onChangeToken={this.onChangeToken} user={this.state.user}/>
                    <Catalog user={this.state.user} refreshCart={this.refreshCart}/>
                </div>
            </Provider>
        );
    }
}

export default App;


/*

 */