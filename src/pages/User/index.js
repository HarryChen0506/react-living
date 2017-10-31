//计数器页面
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as getUserInfo from '../../redux/actions/userInfo.js';

class User extends Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        console.log('user组件挂载了');
        console.log('process.env',process.env);
        console.log(this.props)

    }
    actions(){
        console.log(this.props.getUserInfo)
        this.props.getUserInfo.getUserInfoSuccess({
            "name": "harry",
            "intro": "please give me a star"
        })       
    }
    render(){
        const {isLoading, userInfo, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading? '正在加载中....' : (
                          errorMsg? errorMsg: (
                                <div>
                                    <div>用户: {userInfo.name} </div>
                                    <div>介绍: {userInfo.intro}  </div>                    
                                </div> 
                          ) 
                    )
                }
                <button onClick={this.actions.bind(this)}>获取用户信息</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo 
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        getUserInfo: bindActionCreators(getUserInfo, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);