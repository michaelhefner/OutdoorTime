import { LOGIN_USER, LOGOUT_USER } from './actions';

export const user = (state = [], action) => {
    const { type, payload } = action;
    const { text } = payload || '';

    switch (type) {
        case LOGIN_USER:
            return { ...user, isLoggedIn: text };
        case LOGOUT_USER:
            return { ...user, isLoggedIn: text };
        default:
            return state;
    }
}