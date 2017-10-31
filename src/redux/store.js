//store  将reducer和action联合起来

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store