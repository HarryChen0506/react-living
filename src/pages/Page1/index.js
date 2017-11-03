
import React, {Component} from 'react';
import './page1.scss';
import './page1.css';
import img from './images/seat.png';

import img1 from 'static/images/category/138012-20161022224121920-424129491.png'

export default class Page1 extends Component {
    constructor(props,context){
        super(props,context)
    }
    componentDidMount(){
        console.log('page组件挂载了');
        console.log('process.env',process.env);
        console.log(this.props)
    }
    render(){
        return (
            <div className="box">
                this is Page1!!---!!!!!
                <div className="url">url：{this.props.match.url}</div>
                <div><img src={img} alt=""/></div>
                <pre>{JSON.stringify(this.props.match)}</pre>
                <h3>测试css</h3>
                <img src={img} alt=""/>
            </div>
        )
    }
}