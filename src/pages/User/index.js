//计数器页面
import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from '../../redux/actions/userInfo.js';

class User extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('组件挂载了');
        fetch('/someapi/user.json').then((response)=>{
            // console.log('response',response)
            return response.json()
        }).then((json)=>{
            console.log('json',json)
        })

        console.log('process.env',process.env);

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
                <button onClick={()=>this.props.getUserInfo()}>获取用户信息</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo 
    }
}
// const mapDispatchToProps = (dispatch)=> {
//     return {
//         increment: ()=>{
//              console.log('自增');
//             dispatch(increment())
//         }
// }
const mapDispatchToProps = (dispatch)=> {
    return {
        getUserInfo: ()=>{
            // console.log(123);
            getUserInfo()(dispatch);
        }
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(User);
export default connect(mapStateToProps, mapDispatchToProps)(User);

