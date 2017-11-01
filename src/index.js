
// var foo = ()=>{
//     document.getElementById('app').innerHTML = '<h3>webpack react demo! hello react</h3>';
// }
// foo();
// console.log('babel解析箭头函数')

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

//redux 
import {Provider} from 'react-redux';
import store from './redux/store.js'

//App组件
import App from 'components/App';

// 初始化
ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>    
    </AppContainer>,
    document.getElementById('app')
)
//热更新
if(module.hot){
    module.hot.accept('components/App/index.js',()=>{
        const nextApp = require('components/App/index.js').default;
        ReactDom.render(
            <AppContainer>
                <Provider store={store}>
                    { nextApp }
                </Provider>    
            </AppContainer>,
            document.getElementById('app')
        )
    })
}



// 初始化
// renderWithHotReload(App);
//热更新
/*if(module.hot){
    module.hot.accept('components/App/index.js',()=>{
        const nextApp = require('components/App/index.js').default;
        renderWithHotReload(nextApp);
    })
}
function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                { RootElement }
            </Provider>    
        </AppContainer>,
        document.getElementById('app')
    )
}*/

