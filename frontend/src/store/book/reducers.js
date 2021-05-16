import {BOOK_CHANGE} from "./actions";

const defaultState = {
    book: {}
}

export const bookReducer = (state = defaultState, action) => {
    switch (action.type)
    {
        case BOOK_CHANGE:
            return {
                ...state,
                book: action.payload
            }
    }

    return state
}