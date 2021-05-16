import React, {useEffect, useState} from "react";
import {Header} from "./Header";
import '../styles/App.css';
import Cookies from 'js-cookie';
import Axios from "axios";
import {Catalog} from "../routes/Catalog";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from '../store/reducers';
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import {setUser} from "../store/user/actions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BookContainer from "../containers/routes/BookContainer";
import {AdminPanel} from "../routes/AdminPanel";
import {AddBook} from "../routes/AddBook";
import {AddAuthor} from "../routes/AddAuthor";
import {AddGenre} from "../routes/AddGenre";


const App = () => {

    const store = createStore(rootReducer, applyMiddleware(logger, thunk))

    useEffect(() => {
        let token = Cookies.get('token')
        if (token !== null)
            identification(token)
    })

    const onChangeToken = (token) => {
        if (token !== null)
            Cookies.set('token', token)
        else
            Cookies.remove('token')

        identification(token)
    }

    const identification = (token) => {
        if(token !== null)
        {
            Axios.get('http://localhost:3000/identification', {
                headers: {
                    token: token
                }
            }).then(res => {
                store.dispatch(setUser(res.data))
            }).catch(err => {
                store.dispatch(setUser(null))
            })
        }
        else
        {
            store.dispatch(setUser(null))
        }
    }

    return (
        <Provider store={store}>
            <Router>
            <div className="container">
                <Header onChangeToken={onChangeToken} user={store.getState().userReducer.user}/>

            </div>

                <Switch>
                    <Route path="/book">
                        <BookContainer />
                    </Route>
                    <Route path="/catalog">
                        <Catalog user={store.getState().userReducer.user} />
                    </Route>
                    <Route path="/add-book">
                        <AddBook />
                    </Route>
                    <Route path="/add-author">
                        <AddAuthor />
                    </Route>
                    <Route path="/add-genre">
                        <AddGenre />
                    </Route>
                    <Route path="/admin">
                        <AdminPanel />
                    </Route>
                </Switch>

            </Router>
        </Provider>
    );
}

export default App;


/*

 */