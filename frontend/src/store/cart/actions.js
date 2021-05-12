import Axios from "axios";

export const CART_ITEMS_CHANGE = "CART_ITEMS_CHANGE"

export const setCartItems = (cartItems) => ({
    type: CART_ITEMS_CHANGE,
    payload: cartItems
})

export const getCartItems = () => (dispatch, getState) => {
    console.log(getState().cartReducer.cartItems[0])
    dispatch(setCartItems())
}