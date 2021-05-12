import Axios from "axios";

export const USER_CHANGE = "USER_CHANGE"

export const setUser = (user) => ({
    type: USER_CHANGE,
    payload: user
})

export const getUser = () => (dispatch, getState) => {
    console.log(getState().cartReducer.cartItems[0])
    dispatch(setUser())
}