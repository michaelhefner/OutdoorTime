import { createStore, combineReducers } from 'redux';
import { user } from './src/redux/reducers';

const reducers = {
    user,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
    createStore(
        rootReducer,
    );