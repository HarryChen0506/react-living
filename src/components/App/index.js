import React, {Component} from 'react';
import Nav from 'components/Nav';
//路由
import getRouter from 'router/router.js';

export default class App extends Component {
    render(){
        return (
            <div>
               <Nav/>
               {getRouter()}
            </div> 
        )
    }
}