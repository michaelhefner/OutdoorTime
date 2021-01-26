import { createStore, combineReducers } from 'redux';
import { user } from './user/reducers';

const reducers = {
    user,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
    createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    );