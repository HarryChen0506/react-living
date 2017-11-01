//计数器页面
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as getUserMsg from 'actions/userMsg.js';

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
        console.log(this.props.getUserMsg)
        this.props.getUserMsg.getUserMsgSuccess({
            "name": "harry",
            "intro": "please give me a star"
        })       
    }
    render(){
        const {isLoading, userMsg, errorMsg} = this.props.userMsg;
        return (
            <div>
                {
                    isLoading? '正在加载中....' : (
                          errorMsg? errorMsg: (
                                <div>
                                    <div>用户: {userMsg.name} </div>
                                    <div>介绍: {userMsg.intro}  </div>                    
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
        userMsg: state.userMsg 
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        getUserMsg: bindActionCreators(getUserMsg, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);