
// var foo = ()=>{
//     document.getElementById('app').innerHTML = '<h3>webpack react demo! hello react</h3>';
// }
// foo();
// console.log('babel解析箭头函数')

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
//路由
import getRouter from './router/router.js';
//redux 
import {Provider} from 'react-redux';
import store from './redux/store.js'

// 初始化
renderWithHotReload(getRouter());

//热更新
// console.log('module',module)
if(module.hot){
    module.hot.accept('./router/router',()=>{
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    })

}

function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>    
        </AppContainer>,
        document.getElementById('app')
    )
}

