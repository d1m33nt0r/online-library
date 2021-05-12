import {CART_ITEMS_CHANGE} from "./actions";

const defaultState = {
    cartItems: []
}

export const cartItemsReducer = (state = defaultState, action) => {
    switch (action.type)
    {
        case CART_ITEMS_CHANGE:
            return {
                ...state,
                cartItems: action.payload
            }
    }

    return state
}