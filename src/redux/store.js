//store  将reducer和action联合起来

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

// let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
// http://blog.csdn.net/esther_heesch/article/details/63688516   检测是否安装redux插件
let store; 
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
       combineReducers, 
       applyMiddleware(thunkMiddleware)
    );
}else{
    store = createStore(
        combineReducers, 
        compose(
            applyMiddleware(thunkMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) //插件调试，未安装会报错
    );
}


export default store