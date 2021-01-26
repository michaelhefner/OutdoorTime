export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = text => ({
    type: LOGIN_USER,
    payload: { text },
});