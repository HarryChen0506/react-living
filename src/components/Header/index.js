
import React, {Component} from 'react';
import './header.scss';

export default class Header extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="common-header">
                <span className="back-icon" onClick={this.HandleBack.bind(this)}>
                    <i className="fa fa-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>         
        )
    }
    HandleBack(){
        window.history.back();
    }
}