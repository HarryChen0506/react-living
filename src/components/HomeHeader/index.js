
import React, {Component} from 'react';
import './homeHeader.scss';

export default class HomeHeader extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div id="home-header" className="home-header">
               <div className="home-header-left f-left">
                   {this.props.cityName}
                   <i className="fa fa-angle-down m_left_5"></i>
               </div>
               <div className="home-header-right f-right">
                   <i className="fa fa-user"></i>
               </div>
               <div className="home-header-middle">
                    <div className="search-container">
                        <i className="fa fa-search m_left_5"></i>
                        <input className="m_left_5" type="text" placeholder="请输入关键字"/>
                    </div>
               </div>
            </div>            
        )
    }
}