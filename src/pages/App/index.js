import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Nav from 'components/Nav';
//路由
import getRouter from 'router/router.js';


import * as getUserInfoActions from 'actions/userInfo.js';

class App extends Component {
    render(){
        return (
            <div>
               <Nav/>
               {getRouter()}
            </div> 
        )
    }
    componentWillMount() {
        // 获取位置信息
        let cityName = '南京'
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.getUserInfoActions.getUserInfoSuccess({
            cityName: cityName
        })

    }
}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = (dispatch)=> {
     return {
        getUserInfoActions: bindActionCreators(getUserInfoActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);