import {USER_CHANGE} from "./actions";

const defaultState = {
    user: null
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type)
    {
        case USER_CHANGE:
            return {
                ...state,
                user: action.payload
            }
    }

    return state
}