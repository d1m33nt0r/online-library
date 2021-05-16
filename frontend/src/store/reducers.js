import {combineReducers} from 'redux'
import {cartItemsReducer} from './cart/reducers'
import {userReducer} from "./user/reducers";
import {bookReducer} from "./book/reducers";
import {commentReducer} from "./comment/reducers";

export default combineReducers({
    cartReducer: cartItemsReducer,
    userReducer: userReducer,
    bookReducer: bookReducer,
    commentReducer: commentReducer
})