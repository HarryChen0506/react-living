
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeHeader from 'components/HomeHeader';
import Category from 'components/Category';
import Ad from './subPages/Ad.js';

class Home extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        let userInfo = this.props.userInfo; 
        return (
            <div>
                <HomeHeader cityName={ userInfo.cityName }/>
                <Category/>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad/>

            </div>            
        )
    }  
    componentDidMount(){
        // console.log('props',this.props)
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