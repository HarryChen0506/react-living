
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeHeader from 'components/HomeHeader';
import Category from 'components/Category'

class Home extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>

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