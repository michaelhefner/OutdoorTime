export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
export const updateUserStatus = text => ({
    type: UPDATE_USER_STATUS,
    payload: { text },
});