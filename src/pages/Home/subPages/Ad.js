import React, {Component} from 'react';
import HomeAd from 'components/HomeAd';
import httpService from 'httpService/service.js'

export default class Ad extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            data: []
        }
    }
    render(){
        return (
           <div>
            {
                this.state.data.length
                ? <HomeAd title={this.props.title} data={this.state.data}/>
                : <div>{/* 加载中... */}</div>
            }
            </div>
        )
    }
    componentDidMount(){
        this.getAdData();
    }
    getAdData(){
        httpService.home.getAdData({cityName:'shenzhen'}).then((data)=>{
            let list = data.result.data;
            this.setState({
                data: list
            })
        },function(err){
            console.log(err)
        })
    }
}