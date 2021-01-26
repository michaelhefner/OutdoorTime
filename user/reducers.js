import { LOGIN_USER, UPDATE_TOKEN } from './actions';

export const user = (state = [], action) => {
    const { type, payload } = action;
    const { text } = payload || '';

    switch (type) {
        case LOGIN_USER:
            return { ...user, ...text };
        default:
            return state;
    }
}