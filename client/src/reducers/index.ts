import {combineReducers, createStore} from '@reduxjs/toolkit';
import main, {InitialState} from './main';

export interface State {
    main: InitialState
}

const rootReducer = combineReducers<State>({
    main
})

export const store = createStore(rootReducer);

