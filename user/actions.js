export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = text => ({
    type: LOGIN_USER,
    payload: { text },
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = text => ({
    type: LOGOUT_USER,
    payload: { text },
});