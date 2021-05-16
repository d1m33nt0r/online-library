import {COMMENTS_CHANGE} from "./actions";

const defaultState = {
    comments: []
}

export const commentReducer = (state = defaultState, action) => {
    switch (action.type)
    {
        case COMMENTS_CHANGE:
            return {
                ...state,
                comments: action.payload
            }
    }

    return state
}