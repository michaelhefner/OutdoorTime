import { UPDATE_USER_STATUS } from './actions';

const initState = {isLoggedIn: false, token: '', userName: ''}
export const user = (state = initState, action) => {
    const { type, payload } = action;
    const { text } = payload || '';

    switch (type) {
        case UPDATE_USER_STATUS:
            return { ...user, ...text };
        default:
            return state;
    }
}