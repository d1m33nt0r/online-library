import {combineReducers} from 'redux'
import {cartItemsReducer} from './cart/reducers'

export default combineReducers({
    cartReducer: cartItemsReducer
})