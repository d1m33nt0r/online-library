export const USER_CHANGE = "USER_CHANGE"

export const setUser = (user) => ({
    type: USER_CHANGE,
    payload: user
})