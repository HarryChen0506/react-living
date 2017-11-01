
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeHeader from 'components/HomeHeader';

class Home extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.userInfo.cityName}/>          
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);