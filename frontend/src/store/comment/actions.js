export const COMMENTS_CHANGE = "COMMENTS_CHANGE"

export const setComments = (comments) => ({
    type: COMMENTS_CHANGE,
    payload: comments
})